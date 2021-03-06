if (typeof Blob === 'undefined' || typeof URL === 'undefined') {
  document.querySelector('.warning-tip').style.display = 'block';
  var closeEl = document.querySelector('.warning-tip > .close');
  if (closeEl) {
    closeEl.onclick = function (event) {
      document.querySelector('.warning-tip').style.display = 'none';
    }
  }
}

var json = {
  bool: true,
  num: 3.14159,
  str: '字符串',
  obj: {
    foo: 'bar'
  }
};
var str = JSON.stringify(json, null, 2) + '\n';
var blob = new Blob([str], { type: 'application/json' });

document.getElementById('download-btn').addEventListener('click', function () {
  saveAs(blob, 'blob.json');
}, false);
