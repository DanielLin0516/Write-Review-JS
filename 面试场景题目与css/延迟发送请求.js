function bactchConnect(url) {
  let resultWs;
  //延迟方法
  const sleep = time => {
    return new Promise(res => setTimeout(res, time));
  }
  //延迟建连方法
  const openWsWidthDelay = async delay => {
    //延迟执行 
    await sleep(delay);
    if (resultWs) {
      //如果其他建连尝试已经成功
      return Promise.reject();
    } else {
      //如果没有其他成功，则尝试建连
      return new Promise((resolve, reject) => {
        const ws = new WebSocket(url);
        ws.open = () => {
          if (resultWs) {
            ws.close();
          } else {
            resultWs = ws;
            resolve(resultWs)
          }
        }
        ws.onerror = event => reject(event)
      })
    }
  }
  return Promise.race([openWsWidthDelay(0), openWsWidthDelay(200), openWsWidthDelay(500)])
}