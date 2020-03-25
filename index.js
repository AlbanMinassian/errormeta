/*! -*- coding: utf-8 -*- */

/**
 * extend node error with second parameter
 *
 * @param {string} message - classic message
 * @param {Object} meta -  you want
 * @return {Object} ErrorMeta
 */
function ErrorMeta(message, meta) {
    this.name = "ErrorMeta";
    this.message = message;
    this.meta = meta;
    this.stack = (new Error()).stack;
}
ErrorMeta.prototype = Object.create(Error.prototype);
ErrorMeta.prototype.constructor = ErrorMeta;

module.exports = ErrorMeta;