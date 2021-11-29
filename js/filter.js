/*********************************************
 *  File: filter.js
 *  Author: trinhvu-realdude
 * 
 */
/** 
 *  Set up the filter to prevent strange characters
 */
(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

/**
 *  Filter just accept the integer value
 */
$(document).ready(function () {
    $("#a-value").inputFilter(function (value) {
        return /^\d*$/.test(value);
    });
    $("#b-value").inputFilter(function (value) {
        return /^\d*$/.test(value);
    });
    $("#n-value").inputFilter(function (value) {
        return /^\d*$/.test(value);
    });
});

/** Function: filterEmptyError
 * 
 *  Check the empty inputs from user
 */
function filterEmptyError(a, b, n) {
    const target = document.getElementById("solution-target");
    if (a !== "" && b !== "" && n !== "" && parseInt(a) !== 0) {
        target.style.display = "block";
        return false;
    } else {
        target.style.display = "none";
        return true;
    }
}
