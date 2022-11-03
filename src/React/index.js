// 创建文本节点
const createTextElement = (text) => {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}
/**
 * 创建虚拟 DOM 结构
 * @param type HTML 元素的类型（h1,p,button）
 * @param props 对象的属性（{style:{size:10px}} 或 Eventhandlers、classNames 等）
 * @param children 需要在屏幕上显示的任何东西
 * @return element 创建虚拟 DOM 结构
 */
const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) =>
                typeof child === "object" ? child : createTextElement(child)
            ),
        },
    };
}

/**
 *
 * @param element 需要在DOM中渲染的元素
 * @param container 在 dom 中渲染的位置
 */
const render = (element, container) => {
    // 为元素创造节点
    const dom = element.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);
    console.log(dom, element, 'dom')
    // 为 DOM 节点添加属性props
    const isProperty = key => key !== "children"
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            console.log(name,name.trim() === 'style', '2')
            if (name.trim() === 'style') {
                Object.keys(element.props[name]).forEach(v => {
                    dom[name].setProperty(v, element.props[name][v])
                })
                dom[name].setProperty = element.props[name]
                return
            }
            dom[name] = element.props[name]
            console.log(element.props[name], 'look')
            console.log(dom[name], 'look')
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
    render,
}

export default React
