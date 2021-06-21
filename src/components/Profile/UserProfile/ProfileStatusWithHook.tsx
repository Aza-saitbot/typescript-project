import React, {ChangeEvent, FC, useEffect, useState} from "react";

type PropsType={
    status:string
    updateStatus:(newStatus:string)=>void
}


const ProfileStatusWithHooks: FC <PropsType> = ({status,updateStatus}) => {

    //данный лок-й стайт используем для вкл и откл редима редактирования статуса, с помощью true и false
    let [editMode, setEditMode] = useState<boolean>(false);

    //здесь мы исполь-м для синхранизации данные из глоб стайта с лок стайтем
    // и с помощью завис-ти useEffect актуализируем статус
    let [localStateStatus, setStatus] = useState<string>(status);

    //Хук следить за статусом если придет из пропсов он обновит состояния сперва в лок стайте, затем отрисуется
    useEffect(() => {
        setStatus(status)
    }, [status])

    //вкл режим редактирования статуса
    const activateEditMode = () => {
        setEditMode(true)
    }

    //отключить режеим редактирования и отправить в глоб стайте для обновления статуса
    //как обновится в зависимости useEffect увидит и сохранит данные в лок стайте и отрисует его
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(localStateStatus);
    }

    //забрать текущее значения статуса
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            <div>{/*//включить режим редактирования статуса*/}
                {!editMode && <div>
                    <span onDoubleClick={activateEditMode}>{localStateStatus || '------'}</span>
                </div>}
            </div>
            <div>{/*//изменить и отключить режим редактирования*/}
                {editMode && <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={localStateStatus}/>
                </div>}
            </div>
        </>
    )
}

export default ProfileStatusWithHooks;