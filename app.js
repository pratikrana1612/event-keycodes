const renderText = document.querySelector('.main_keycodes_render');


function createRootElement  (element,text) 
{
    const el = document.createElement(element);
    el.innerText = text;
    return el;
}
const appendFunction= (ele) =>
{
    renderText.append(ele);
}
window.addEventListener('keydown',event =>
{

   
    const p1 = createRootElement('p','event.key');
    const div1 =createRootElement('div',`${event.key}`);
    const p2 = createRootElement('p','event.keyCode');
    const div2 =createRootElement('div',`${event.keyCode}`);
    const p3 = createRootElement('p','event.code');
    const div3 =createRootElement('div',`${event.code}`);
    const elements = [p1,div1,p2,div2,p3,div3];
    // console.log(p)
    renderText.innerHTML = '';
    // for(let i=0;i<3;i++)
    // {
    //     const main_div = document.createElement('div');
    //     renderText.append(main_div);
    // }
        for(const i of elements)
        {
            appendFunction(i);
        }
 

    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log(event.code)
})