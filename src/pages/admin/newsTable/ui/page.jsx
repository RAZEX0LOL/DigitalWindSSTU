import HeaderJury from "../../../../components/adminPage/HeaderAdmin";
import cl from "./style.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../router.config";
import { useState } from "react";
import {TemporalDate} from "../../../../shared/utils/date";

const PER_PAGE = 15;

export const NewsTablePage = () => {
  const [news, setNews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <HeaderJury />
      <main className={cl.main}>
        <div className="container-works-list">
          <table className={cl.table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {news.map((n, index) => (
                <tr key={index}>
                  <td>{n.title}</td>
                  <td>{TemporalDate.format(new Date(n.date), 'DD.MM.YYYY')} </td>
                  <td>
                    <Link to={ROUTES.redirect.adminNewsEdit(n.id)}><button className={cl.button}>редактировать</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button onClick={previousPage}>◀</button>
          {[...Array(Math.ceil(news.length / PER_PAGE))].map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage}>▶</button>
        </div>
      </main>
    </>
  );
};
