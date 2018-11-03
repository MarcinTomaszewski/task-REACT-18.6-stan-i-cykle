// komponent zwiększający i zmniejszający licznik.
/* Metoda getInitialState() określa początkowy stan naszego komponentu.
    1.metoda ta powinna zwracać obiekt do którego można się odwołać za pomocą parametru this.state.
    2.w przykładzie poniżej odwołuje się do wartości, która znajduje się pod kluczem counter, stąd this.state.counter.
*/ 
/* Funkcja increment() zajmuje się odpowiednią zmianą stanu. 
   Stan ustawiany jest za pomocą metody setState.
   1. Aby użyć metody setState() trzeba przekazać do niej obiekt, w którym zawarte są klucze i ich wartości mające ulec zmianie.
*/ 
var Counter = React.createClass({
    //faza inicjalizacji
    getInitialState: function() {
        console.log('getInitialState - określamy początkowy stan komponentu (wartość).\n')
        return {
            counter: 0
        }
    },
    getDefaultProps: function(){
        console.log('getDefaultProps - metoda ta ustawia domyślne wartości propsów.\n');
    },

    componentWillMount: function() {
        console.log('componentWillMount - metoda ta wywoływana jest przed renderowaniem. Nie jest to dobre miejsce na np. wywoływanie żądań. Aktualizacja stanu na tym etapie nie spowoduje zmian w komponencie. Wyświetlony zostanie stan początkowy komponentu. \n')
    },

    componentDidMount: function(){
        console.log('componentDidMount - jest to dobre miejsce  na aktualizacje stanu komponentu np. żądanie API lub inne manipulacje na elemencie.\n')
    },

    //faza aktualizacji
    componentWillReceiveProps: function (nextProps) {
        console.log('componentWillReceiveProps: jako parametr przekazywany jest obiekt z nowymi propsami. \n');
    },  

    shouldComponentUpdate: function(nextProps, nextState){
        console.log('shouldComponentUpdate: za pomocą tej metody można sterować renderowaniem komponentu np. jeśli metoda ta zwróci false to wszystkie kolejne metody cyklu życia zostaną anulowane. Metoda ta przyjmuje dwa parametry: nextProps i nextState. \n');
        return true;
    },

    componentWillUpdate: function(){
        console.log('componentWillUpdate: ma podobne przeznaczenie co metoda  componentWillMount. Wywoływana jest zaraz przed metodą render. Nie powinna zawierać wywoływania this.setState. Gdyż nie spowoduje to kolejnego renderowania.\n');
    },
    componentDidUpdate: function (prevProps, prevState){
        console.log('componentDidUpdate: jest ona odpowiednikiem metody componentDidMount() z etapu montowania. Przyjmuje parametry prevProps oraz prevState, które zawierają poprzednią wartość obiektu this.props oraz stanu komponentu. Jest to miejsce w którym możemy aktualizować stan komponentu. \n ')
    },
    
    //faza usuwania komponentu
    componentWillUnmount: function(){
        console.log('componentWillUnmount: nie przyjmuje parametrów i służy do wykonywania zadań czyszczenia.\n');
        
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1  //stan ustawiony jest na taki jaki był plus 1.
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    render: function() {
        return ( 
            React.createElement('div', { className: 'box'},            // dodaje zdarzenie onclick
                React.createElement('button', { className: 'item', onClick: this.increment}, 'Increment'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
                React.createElement('button', { className: 'item', onClick: this.decrement}, 'Decrement')
            )
        )
    }
});



var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'container'}, 
                    React.createElement(Counter, {}, ),
                    React.createElement(Counter, {}, ),
                    React.createElement(Counter, {}, ),
            )    
        )                
    }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));

