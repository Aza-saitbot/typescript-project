
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

// юнит тесты (минимальные) - программным способом имитируем вызовы ,например после onClick, проверяем изменилась ли что то, где должно было быть изменения

describe("ProfileStatus component", () => {  //describe группирует тесты
    test("status from props", () => {
        const component = create(<ProfileStatus status={"Jambo!"}/>); //create - виртуально создает DOM, в браузере не отражается и запусукает Component
        const instance = component.getInstance();//созданный объект на базе Сlass ProfileStatus, к-е взаимодействует React
        expect(instance.state.status).toBe("Jambo!");
    });
    test(`after creation <Input> should be displayed`, () => {
        const component = create(<ProfileStatus status={"Jambo!"}/>); //рисуем и перекидываем через пропс данные
        const root = component.root;
        expect(() => {
            let input = root.findByType("Input");
        }).toThrow();//Будет искать инпут в Компоненте, но его нет и в итоге должны увидить ошибку
    });
    test(`after creation <span> should be displayed`, () => {
        const component = create(<ProfileStatus status={"Jambo!"}/>); //рисуем и перекидываем через пропс данные
        const root = component.root;
        let span = root.findByType("span");//находим спан
        expect(span).not.toBeNull();// у спана не должно быть значения null
    });
    test(`after creation <input> should be displayed`, () => {
        const component = create(<ProfileStatus status={"Jambo!"}/>); //рисуем и перекидываем через пропс данные
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();//;input не должно быть и ждем ошибку
    });
    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status={"Jambo!"}/>); //create render() в созадвшимся в виртуальном DOM -это в браузере не отражается
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Jambo!");//содержить ли спан напдпись Джамбо
    });
    test("input should be displayed in EditMode instead of span", () => {
        const component = create(<ProfileStatus status={"Jambo!"}/>);
        const root = component.root;
        let span = root.findByType("span");//нашли спан
        span.props.onDoubleClick();//нашли у этого спана обработчик события кликнул
        let input = root.findByType("input");//нашли инпут
        expect(input.props.value).toBe("Jambo!");// и в этом инпуте значения должны изменить после клика
    });
    test("Callback should be call", () => {
        const mockCallback = jest.fn()//фейковый функция, к-й считает сколько раз должно быть вызвана callback
        const component = create(<ProfileStatus status={"Jambo!"} updateStatus={mockCallback}/>);//передаем фейк функцию в компоненту
        const instance = component.getInstance();//в переменной будет объект классового компонента
        instance.deactivateEditMode()//если у метода объекта вызваться эта функция должна автоматически вызваться updateStatus
        expect(mockCallback.mock.calls.length).toBe(1);// и здесь мы ждем что должно вызваться один раз, что updateStatus вызвается проверяем
    });

});