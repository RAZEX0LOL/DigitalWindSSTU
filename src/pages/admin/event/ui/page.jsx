import { useCallback, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { EventService } from "../../../../api/event.service"
import HeaderJury from "../../../../components/adminPage/HeaderAdmin"
import { useForm } from "../../../../shared/utils/use-form"
import cl from './style.module.css'
import { MDXEditor, headingsPlugin, UndoRedo, BoldItalicUnderlineToggles, BlockTypeSelect, toolbarPlugin, CreateLink, InsertCodeBlock, InsertImage, ListsToggle, linkPlugin, codeBlockPlugin, imagePlugin, linkDialogPlugin, listsPlugin } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

export const EventPage = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null);

  const form = useForm()
  console.log(form)

  const handleGetEventData = useCallback(async () => {
    const { data } = await EventService.instance.getEventById(id)
    setEvent(data)
    form.setInitialValue(data);
  }, [id, form])

  const handleSubmitForm = async (values) => {
    const { data } = await EventService.instance.updateEvent(values);
    console.log('updated event', data)
  }

  useEffect(() => {
    handleGetEventData()
  }, [id])


  if (!event) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <HeaderJury />
      <main className={cl.main}>
        <form className={cl.form} onSubmit={form.handleSubmit(handleSubmitForm)}>
          <div className={cl.inputs}>
            <div className={cl.container}>
              <label>Заголовок</label>
              <input {...form.register('title', 'text')} className='input' />
            </div>
            <div className={cl.container}>
              <label>Дата начала</label>
              <input {...form.register('dateStart', 'date')} className='input' />
            </div>
            <div className={cl.container}>
              <label>Дата окончания</label>
              <input {...form.register('dateEnd', 'date')} className='input' />
            </div>
            <div className={cl.container}>
              <label>Кол-во сводных мест</label>
              <input {...form.register('countAvailablePlaces', 'number')} className='input' />
            </div>
            <div className={cl.container}>
              <label>Место прохождения мероприятия</label>
              <input {...form.register('location', 'text')} className='input' />
            </div>
          </div>
          <MDXEditor markdown={form.values?.text ?? ''} onChange={(val) => form.setValue('text', val)} plugins={[headingsPlugin(), linkPlugin(), linkDialogPlugin(), listsPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {' '}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CreateLink />
                <ListsToggle />
              </>
            )
          })
          ]} />
          <button type='submit' className='button'>submit</button>
        </form>
      </main>
    </>
  )
}
