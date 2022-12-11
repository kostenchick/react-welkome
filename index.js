// class HeaderComponent extends React.Component {
//     render() {
//         console.log(this.props);
//         const p = React.createElement('p', {}, 'Super paragraph');
//         const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello ${this.props.text}` );
//         const article = React.createElement('article', {}, h2, p);
//         return article;
//     }

//     const component = React.createElement(HeaderComponent, {text: 'React!!!'});
//     const component2 = React.createElement(HeaderComponent, {text: 'JavaScript'});
//     const parentElement = 
// }

const root = document.querySelector('#root');
const h1 = React.createElement('h1', {}, 'Hello React!');

ReactDOM.render(h1, root); // прицепить, заапендить = монтировать