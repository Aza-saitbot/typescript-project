import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'


type PropsType={
    totalItemsCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(page:number, pageSize:number)=>void
    portionSize?:number
}


 let Paginator:React.FC<PropsType> = ({totalItemsCount, pageSize,
                                         currentPage, onPageChanged,
                                         portionSize = 10}) => {

/*после полученного запрос из сервера о данных о кол-ве totalItemsCount зарег-х пол-ей на хостинге
записываем в стор и направляем с указанной нами в сторе о количестве нужной стр pageSize
   дальше делим общ кол-во юзеров на размер страницы в итоге получаем
   Общее кол-во страниц, для отображения в браузере */

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

/*перебираем по одному элементу, в результате получаем массив */
    let pages:Array <number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

/*//определяем сколь у нас кол-во порции есть */

    const portionCount = Math.ceil(pagesCount / portionSize);

    /*локально сохраняем 1 стартовую порцию страниц */
    const [portionNumber, setPortionNumber] = useState (1);

/*делаем условие, если в состояние больше 1-го то покажи кнопку*/
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button className={s.buttonPaginator} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p,pageSize);
                             }}>{p}</span>
            })
        }

        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }} className={s.buttonPaginator}>Next</button>}
    </div>
}
export default Paginator;