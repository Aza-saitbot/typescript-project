import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component <PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    // задача засинхринозовать глобальный состояния статуса с локальным состоянием- статусом
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {//зная предудщий state и props

        if (prevProps.status !== this.props.status) {//обязательно с условием делаем сравнения предудщего props и текущего, что бы не было зациклининности/приложение не падала
            this.setState({status: this.props.status})
        }
        ;//если приходит новые props мз глобального состояние мы меняем и в локаольном состоянии - синхронизируем
    }

    activateEditMode = () => {
        this.setState({//что бы изменить локальное состояние нашего объекта на false, применим из React.Component метод setState
            editMode: true
        })//setState запрос асихронный , не сразу меняет
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {

        return (
            <>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                    </div>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                    }
                </div>
            </>
        )
    }
}

export default ProfileStatus;