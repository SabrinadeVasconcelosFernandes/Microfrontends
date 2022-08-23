import faker from 'faker';


const mount = (el) =>{
    let products = '';

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

el.innerHTML = products;

};

//Context/situation #1 
//- rodando em isolamento, 
//- usando o nosso index.html local 
//- com certeza vai ter um elemento com 
//o id de 'dev-products'
//- nós queremos renderizar o nosso app
//naquele elemento imediatamente
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('dev-products')
    //aqui estamos assumindo que o nosso container
    //não tem um elemento com o id 'dev-products'
    if(el){
        //nós provavelmente estamos rodando products sozinho
        //isolation
        mount(el);
    }
}



//Context/situation #2
//- Nós estamos rodando esse arquivo no
//desenvolvimento ou produção, através 
//do app CONTAINER
//- Não há garantia de que existe um
//elemento com o id de 'dev-products'
//- Nós não queremos rodar o app 
//imediatamente
//-Por que o elemento que procuramos pode
//nem existir
export {mount};