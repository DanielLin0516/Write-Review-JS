/** 
* 全局广播通知; 
* 严格的区分频道与事件的概念 
* 
* @example 
* 
* A模块内监听'audio'频道下的play事件 
* listener.on('audio', 'play', function(d){alert(d);}); 
* 
* B模块内触发'audio'频道下的stop事件 
* listener.trigger('audio', 'stop', 'Hello World!'); 
*/ 
const listener = { 
    callback:{},
    /** 
    * 通知监听 
    * @param {String} channel 频道名 
    * @param {String} eventName 事件类型 
    * @param {Function} callback 事件响应 
    */ 
    on(channel, eventName, callback) { 
    }, 
    /** 
    * 通知监听, 执行一次后销毁 
    * @param {String} channel 频道名 
    * @param {String} eventName 事件类型 
    * @param {Function} callback 事件响应 
    */ 
    once(channel, eventName, callback) { 
    }, 
    /** 
    * 事件触发 
    * @param {String} channel 频道名 
    * @param {String} eventName 事件类型 
    * @param {Object} payload 要传递给相应函数的实参 
    */ 
    trigger(channel, eventName, payload) { 
    }, 
    /** 
    * 事件监听移除 
    * @param {String} channel 频道名 
    * @param {String} type 事件类型 
    * @param {Function} callback 要移除的事件响应函数句柄 
    * @return {Boolean} 是否移除成功 
    */ 
    off(channel, eventName, callback) { 
    }, 
    }; 
    export default listener;