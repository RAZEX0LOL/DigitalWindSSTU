import HeaderJury from "../../../../components/adminPage/HeaderAdmin";
import {
    BoldItalicUnderlineToggles,
    CreateLink,
    headingsPlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    ListsToggle,
    MDXEditor,
    toolbarPlugin,
    UndoRedo
} from "@mdxeditor/editor";
import {useForm} from "../../../../shared/utils/use-form";
import cl from './style.module.css';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

export const NewsPage = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const form = useForm()

    const handleSubmitForm = async (values) => {
        console.log('updated news', values);
    }

    const handleGetNewsData = useCallback(async () => {
        //  запрос за получением конкретной новости
        setLoading(true)
        form.setInitialValue({
            title: 'Заголовок',
            text: 'Текст',
            img: 'Ссылка на картинку',
            date: '2022-02-02'
        })
        setLoading(false)
    }, [id])

    useEffect(() => {
        handleGetNewsData()
    }, [id]);

    return (
        <>
            <HeaderJury/>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <main className={cl.main}>
                    <form className={cl.form} onSubmit={form.handleSubmit(handleSubmitForm)}>
                        <div className={cl.inputs}>
                            <div className={cl.container}>
                                <label>Заголовок</label>
                                <input {...form.register('title', 'text')} className='input'/>
                            </div>
                            <div className={cl.container}>
                                <label>Дата начала</label>
                                <input {...form.register('date', 'date')} className='input'/>
                            </div>
                            <div className={cl.container}>
                                <label>Ссылка на титульную картинку</label>
                                <input {...form.register('img', 'text')} className='input'/>
                            </div>
                        </div>
                        <MDXEditor markdown={form.values?.text ?? ''} onChange={(val) => form.setValue('text', val)}
                                   plugins={[headingsPlugin(), linkPlugin(), linkDialogPlugin(), listsPlugin(),
                                       toolbarPlugin({
                                           toolbarContents: () => (
                                               <>
                                                   {' '}
                                                   <UndoRedo/>
                                                   <BoldItalicUnderlineToggles/>
                                                   <CreateLink/>
                                                   <ListsToggle/>
                                               </>
                                           )
                                       })
                                   ]}/>
                        <button type='submit' className='button'>submit</button>
                    </form>
                </main>)}
        </>
    );
};