const renderText = document.querySelector('.main_keycodes_render');
function createRootElement  (element,text) 
{
    const el = document.createElement(element);
    el.innerText = text;
    return el;
}
window.addEventListener('keydown',event =>
{   
    const section1=document.createElement('div');
    const p1 = createRootElement('p','event.key');
    const div1 =createRootElement('div',`${event.key}`);
    const section2=document.createElement('div');
    const p2 = createRootElement('p','event.keyCode');
    const div2 =createRootElement('div',`${event.keyCode}`);
    const section3=document.createElement('div');
    const p3 = createRootElement('p','event.code');
    const div3 =createRootElement('div',`${event.code}`);
    const elements = [p1,div1,p2,div2,p3,div3];
    section1.className='container';
    section2.className='container';
    section3.className='container';
    // console.log(p)
    renderText.innerHTML = '';
    renderText.append(section1,section2,section3);
    section1.append(elements[0],elements[1]);
    section2.append(elements[2],elements[3]);
    section3.append(elements[4],elements[5]);
})