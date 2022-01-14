export const _parse = JSON.parse;

export const _stringify = JSON.stringify;

export const _local = localStorage;

export const _localSerialization = {
    getItem:item => _parse(_local.getItem(item)),
    setItem:(item, value) => _local.setItem(item, _stringify(value)) 
}