function ajaxRequest (config) {
    let options = config || {};
    options.data = config.data || {};
    options.type = (config.type || 'GET').toUpperCase();
    options.dataType = config.dataType || 'json';
    options.async = config.async || true;
    options.url = config.url;
    options.header = config.header || 'application/json;charset=UTF-8';
    options.success = config.success || function () {};
    options.fail = config.fail || function () {};
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    let params = [];
    for(let i in options.data) {
        params.push(`${i} = ${options.data[i]}`);
    }
    let paramsData = params.join('&');
    if (options.type === 'GET') {
        xhr.open(options.type, options.url + '?' + paramsData, options.async);
        xhr.send(null);
    } else {
        xhr.open(options.type, options.url, options.async);
        xhr.setRequestHeader("Content-type", options.header);
        xhr.send(paramsData);
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                options.success && options.success(xhr.responseText);
            } else {
                options.fail && options.fail(xhr.status);
            }
        }
    }
}