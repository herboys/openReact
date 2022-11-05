/**
 * 创建虚拟 DOM 结构
 * @param type HTML 元素的类型（h1,p,button）
 * @param props 对象的属性（{style:{size:10px}} 或 Eventhandlers、classNames 等）
 * @param children 需要在屏幕上显示的任何东西
<<<<<<< HEAD
 * @return element 虚拟 DOM
 */
function createElement(type, props, ...children) {
    if (children.length > 0) {
        console.log(type, props, children, '01')
        return {
            type,
            props: {
                ...props,
                children: children.map((child) =>
                    typeof child === "object" ? child : createTextElement(child)
                ),
            },
        }
    } else {
      return   newCreateElement(type)
    }


}

function newCreateElement(data) {
    const {type, props, ...children} = data
    console.log(type,'type')
    console.log(props,'123')
=======
 * @return element 创建虚拟 DOM 结构
 */
function createElement(element) {
    const {type, props, ...children} = element
    console.log('type', type, '\nprops', props, '\nchildren', children, element, '开始')
    console.log('--------------------------------------------')
>>>>>>> dc207d1aaa378c7cbaad86a177eec6a3349a6c6a
    return {
        type,
        props: {
            ...props,
<<<<<<< HEAD
            children: typeof props.children === "object"? props.children.map((child) =>
                typeof child === "object" ? newCreateElement(child) : createTextElement(child)
           ):createTextElement(props.children)
            // children: children.map((child) =>
            //     typeof child === "object" ? child : createTextElement(child)
            // ),
        },
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
=======
            children: typeof props.children === 'object' ? props.children.map((child) =>
                typeof child === "object" ? createElement(child) : createTextElement(child.children, 2)
            ) : createTextElement(props.children, 1),
        },
    };
}

function createElementOld(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) =>
                typeof child === "object" ? child : createTextElement(child)
            ),
>>>>>>> dc207d1aaa378c7cbaad86a177eec6a3349a6c6a
        },
    };
}

// 创建文本节点
function createTextElement(text, num) {
    console.log(text, 'text')
    return num == 1 ? [{
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }] : {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

/**
 * 将虚拟 DOM 添加至真实 DOM
 * @param element 需要在DOM中渲染的元素
 * @param container 在 dom 中渲染的位置
 */
function render(element, container) {
<<<<<<< HEAD
=======
    console.log('=================================')
>>>>>>> dc207d1aaa378c7cbaad86a177eec6a3349a6c6a
    // 为元素创造节点
    const dom = element.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);
    // 为 DOM 节点添加属性props
    const isProperty = key => key !== "children"
<<<<<<< HEAD
    console.log(element,'01')
    console.log(Object.keys(element.props).filter(isProperty))
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            console.log(name, 'look')
=======
    console.log('当前的节点', dom, '\n当前递归的入参', Object.keys(element.props).filter(isProperty))
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            console.log(name, name.trim() === 'style', '2')
>>>>>>> dc207d1aaa378c7cbaad86a177eec6a3349a6c6a
            if (name.trim() === 'style') {
                Object.keys(element.props[name]).forEach(v =>{
                        dom[name].setProperty(v, element.props[name][v])
                    }
                )
            }
            console.log(name, 'look')
            if (name.trim() === 'nodeValue') {
                console.log(name, 'look')
                dom[name] = element.props[name]
                console.log(element.props[name], name, 'look')
                console.log(dom[name], 'look')
            }
        })
    console.log(dom, '000')
    // 递归调用
    element.props.children.forEach(child => {
        render(child, dom)
    })
    // 将元素节点添加到container节点里
    container.appendChild(dom);
}

// 渲染器和入口函数
const React = {
    createElement,
    createElementOld,
    render,
}
export default React
