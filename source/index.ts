type paramsType = {
  /**
   * 提示问题
   */
  title: string
  /**
   * 是否存在蒙版
   */
  mask?: boolean
}

function showLoading(params?: paramsType) {
  let defualtParams: paramsType = {
    title: '正在加载中...',
    mask: true,
  }
  params = { ...defualtParams, ...params }
  let baseLoadingIcon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAv4BAaqsZ7NzmxJ5LNiF6PtKzcMiaE/DipWVgCgT5uFhORTEtzpWKU/SPdTomva+FKpIfDdZdWspQKoGnAAAGI0lEQVR42u3dB3LbMBAF0C+KTb333outKJLsJP/+F8tMikmachwJIEDN4B0g8Qpc1AUJwzAMwzAMwzAMwzAMw5CivZwPKmcn84dzrgzmyzYeiTtvtJo7XrVrthpzF+lXtjMeP+Vl7DJSrFRp8r81KyWkUnZf441q+ypSxm3keZfJYIj0mLc6vJv/dYl06DcpyJlDv+95SlBYQK/tF8ox3rjQZzahPN2nEfRw1/yX7qR3tuzpPPvLvP+1l+/yn1Zb6DDw+RHfqRRdXHPaVnqrHT/SKkO1Q48faFolfOJ588rrujbUanh3RBFWspq86liCQtebw98/4wbZtccrxhZUWa4YN+5NR7hR287wih7U+MY4z7ozTbMtxjVHUGDDmN1GoLeZTxjjlZG4CWPWJwgZrBjzjITFpyTOAqKGlQ7fqyJRseTs9iHD0hGIREYcrQsksXMCkYjGUdsmN1cIR5J0HJMLpBp4ajLeYVRhBMlKeUaVkYAGoyzIN2wxYuxCuiKj+ggk93PVXiBZiRG7LRIyZUR9BKnKXYZ5RSSmzwgHMg2/MCxXRoK+M6IBiQoM85GsIsN2paRaO4+YRCOZQJZDlyEekmczrJLMwvYCBTYMGVeT+HmKUKIu/+Faegx5ghoHX3rPdWRID6pMZff3M4b4FyizYUhL8hr9O9QZZRhSlNrCa6hU2jGQl7mYqrWh1BNDbAgZMGQLxfIM1IYQ0RRIOMkdTUNWg4yXUK7AgN+WtB23h3oHT86Ua85A5wANLAa6bSkt+xU6uDkZHddhzDe5C7SwGMjI+Ec20MPNiW89jl4ZWEATi4G1+CaAA13Ku9Dz3RZO9S20KQine+jpXEGfOQNH0a2MJ2iU5xtvhNu1GDhAI5uBOW4XWjR/gU7tjtAosEjLkxXZUWmK9d9LaPXEwIvIz5CHXs9Cg3suPH/WzBcIxJVyJil/TKwKjCI77SXGs2DlLpLrTWj3lrCWSK63oF35C38pCE20bOg3qtTIbgM3e2Egpbcj/s+BATyyLN908cim6RnXpU1venhkG/37J3L00tX7SjkWmeGRhQLJ4pGZQNLGBJI2JpC0Ca2rvuGRtVK0hyLreGWNR2aHt/If2SwdZyNSC689PLJLZN84FbLZKm43YiAV72U4eySdIm7WDZfl6Ofwt61IBWAB2gWjwQk32qep23Jz91+/6adph64vcJz5nIbyjb8KAoG0maJsfxUIBLlwabpeJwaeRFYk4yG06gsdMNsMFKFVQegyUZmBPbR6FVtTNNMyklQZmOJ2FaZk3b5nwL1rJp+O89CXrmh1T41vOhdoMxC+H7xPR33QkYHTnbUsaUj3pYQS0XoaqjMtCX/Edwbq0OPQ4Zsa7lXT3yRrKa8CqFB3XWOWAqkeuHSoeQ/4GE51SQ2bh3pTWTf4FmMG+lCuKa27OTPgu1CsIu9K5WlHffvyi53E/n/DkBmUcmTecS17DPwYQqEBpQ7IX6npxpjry30fgNvV9HCdGXKU/QoO7xmKPDEkd5Kecz7UGDBsABmWHYb8gAoLhrWSaGU6UKDDRO7RTxhmIXFdJtPDVKk2kgyT6vNtgUhE45hApo26SF6icfhlSOWoiuSSYcQckjUZUUAySqvEX3WXY0S+jQRMPTLxyR2jvCqkq5AKxqwh37Fl/wcFRuWRjDbfKbiQaJFh1ApJKfMdfwppGh1G+UjOku+t25Ka48h3ckhSie/VZok0BztI1okxzjMEFeuMQdKGK8a0ThCQdRhThwJrxuy+urhTqcA4G0pUGJc73/WAzQu8oghF+rym/m2Em7TtPK/IL6FMNsNrXq0bmqW0z/GawgtUsnjdapPF59qDgs+ralMoFG6UuNfztwU+5s6sH/zIvg31rDE/5GX230vlF4QN3cXMquf4sXwRWpSO/MQ4V8v81vQ7/IRnjaBL36c06wM0cs9jSuFor/c+WBJaJbNFCgz7eQqpD5AWxUKHd3r9qr2sWMaXHZ3pCKlz67c2x8f0fgF1Ucnw/3R605RcsPnIcGZNPP5TrdfQ3tn+p/L02kcDx7nXfMsupTArPjEqZ4vbb/ZTpTGYVZeu9ncpGYZhGIZhGIZhGIZh3O0nBsEOeqWY4osAAAAASUVORK5CYII='

  if (document.getElementById('vkcyan_show_loading')) {
    close()
  }

  const dom = _createDiv()
  let img = _createImg(baseLoadingIcon)
  dom.appendChild(img)

  if (params.title != '') {
    dom.appendChild(_createText())
  }

  document.body.appendChild(dom)

  if (params.mask) {
    document.body.appendChild(_createMask())
  }

  /**
   * 手动关闭
   */
  function close() {
    let toast = document.getElementById('vkcyan_show_loading')
    let mask = document.getElementById('vkcyan_show_loading_mask')
    toast!.remove()
    if (mask) {
      mask.remove()
    }
  }
  /**
   * toast主体
   */
  function _createDiv() {
    const dom = document.createElement('div')
    dom.id = 'vkcyan_show_loading'
    dom.style.cssText = `
    position:fixed;
    z-index:99999;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    background-color:rgba(17,17,17,0.7);
    border-radius:8px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:16px 20px;
    min-width: 104px;
    `
    return dom
  }
  /**
   * toast底部提示文字
   */
  function _createText() {
    const domText = document.createElement('div')
    domText.style.cssText = 'color:white;font-size:15px;max-width:200px;text-align:center'
    domText.innerText = params!.title!
    return domText
  }

  /**
   * toast蒙版
   */
  function _createMask() {
    let mask = document.createElement('div')
    mask.id = 'vkcyan_show_loading_mask'
    mask.style.cssText = `
    position:fixed;
    z-index:99998;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,0);
    top:0;
    left:0;
    `
    return mask
  }
  /**
   * toast内icon
   */
  function _createImg(imgUrl: string) {
    let img = document.createElement('img')
    img.src = imgUrl
    img.style.cssText = 'width:56px;height:56px;margin-left:16px;margin-right:16px;'
    if (params!.title != '') {
      img.style.marginBottom = '10px'
    }
    img.animate(
      [
        {
          transform: 'rotate(0deg)',
        },
        {
          transform: 'rotate(180deg)',
        },
        {
          transform: 'rotate(360deg)',
        },
      ],
      {
        delay: 0,
        duration: 1000,
        iterations: Infinity,
        fill: 'forwards',
      }
    )
    return img
  }

  return {
    close,
  }
}

export { showLoading }
