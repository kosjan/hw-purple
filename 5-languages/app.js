let lang = prompt('Enter your lang:')

switch (lang) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Привет!');
        break;
    case 'de':
        console.log('Gutten Tag!');
        break;
    default:
        console.log('Язык не определен');
}
