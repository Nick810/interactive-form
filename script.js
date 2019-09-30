/* ----- Variable Declaration ----- */
let $totalCost = 0;
const nameValidator = /^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailValidator = /^[^@]+@[^@.]+\.[a-z]+$/i;
const jobRoleValidator = /^[a-zA-Z ]*$/;
const creditCardValidator = /^\d{16}/;
const zipCodeValidator = /^\d{5}/;
const cvvValidator = /^\d{3}/;
const $validation = [
  {
    message: 'Please enter your name',
    conMessage: 'Please make sure you enter letters only',
    display: false
  },
  {
    message: 'Please enter your email address',
    conMessage: 'Please enter a valid format of email address',
    display: false
  },
  {
    message: 'Please enter your job role',
    conMessage: 'Please make sure you enter letters only',
    display: false
  },
  {
    message: 'Please choose your design',
    display: false
  },
  {
    message: 'Please choose your activities',
    display: false
  },
  {
    message: 'Please fill in your 16-digit number',
    conMessage: 'Please make sure you enter 16 digits of numbers',
    display: false
  },
  {
    message: 'Please fill in your zip code',
    conMessage: 'Please make sure you enter 5 digits of numbers',
    display: false
  },
  {
    message: 'Please fill in your 3-digit cvv',
    conMessage: 'Please make sure you enter 3 digits of numbers',
    display: false
  }
];

/* ----- Functions ----- */
// Validate text type inputs
function inputCheck(inputType, index) {
  const inputValue = $(inputType).val();
  if (/\s/.test(inputValue) || /^$/.test(inputValue) && $validation[index].display === false) {
    $(inputType).addClass('error');
    $(inputType).prev().addClass('error__text');
    $(`<p class="validation-message">${$validation[index].message}</p>`).insertAfter($(inputType));
    $validation[index].display = true;
    return false;
  } else if (/\s/.test(inputValue) || /^$/.test(inputValue) && $validation[index].display === true) {
    return false;
  } else if (/\s/.test(inputValue) || /^$/.test(inputValue)) {
    return false;
  } else {
    return true;
  }
}

// Validate theme input.
function themeInputCheck() {
  if ($('select#design option:selected').val() === 'Select Theme' && $validation[3].display === false) {
    $('fieldset.shirt legend').first().addClass('error__text');
    $(`<p class="validation-message">${$validation[3].message}</p>`).appendTo($('fieldset.shirt'))
    $validation[3].display = true;
    return false;
  } else if ($('select#design option:selected').val() === 'Select Theme' && $validation[3].display === true) {
    return false;
  } else {
    return true;
  }
}

// Validate activities input.
function activitiesInputCheck() {
  if ($('input[type="checkbox"]:checked').length === 0 && $validation[4].display === false) {
    $('fieldset.activities legend').addClass('error__text');
    $(`<p class="validation-message">${$validation[4].message}</p>`).appendTo($('fieldset.activities'))
    $validation[4].display = true;
    return false;
  } else if ($('input[type="checkbox"]:checked').length === 0 && $validation[4].display === true) {
    return false;
  } else {
    return true;
  }
}

// Master validation of all inputs prior to user's submission.
function checkForms() {
  let jobRoleInputValue = null;
  const nameInputValue = inputCheck('input#name', 0);
  if (/^\d+/.test($('input#name').val())) {
    if ($('input#name').next().prop('tagName') === 'P') {
      $('input#name').next().remove();
    }
    $('input#name').addClass('error');
    $('input#name').prev().addClass('error__text');
    $(`<p class="validation-message">${$validation[0].conMessage}</p>`).insertAfter($('input#name'));
  }
  const emailInputValue = inputCheck('input#mail', 1);
  if (!emailValidator.test($('input#mail').val())) {
    if ($('input#mail').next().prop('tagName') === 'P') {
      $('input#mail').next().remove();
    }
    $('input#mail').addClass('error');
    $('input#mail').prev().addClass('error__text');
    $(`<p class="validation-message">${$validation[1].conMessage}</p>`).insertAfter($('input#mail'));
  }
  if ($('select#title option:selected').val() === 'other') {
    jobRoleInputValue = inputCheck('input#other-title', 2);
    $('select#title').prev().addClass('error__text');
    $('select#title').removeClass('error__text');
    if (/^\d+/.test($('input#other-title').val())) {
      if ($('input#other-title').next().prop('tagName') === 'P') {
        $('input#other-title').next().remove();
      }
      $(`<p class="validation-message">${$validation[0].conMessage}</p>`).insertAfter($('input#other-title'));
    }
  }
  const themeInputValue = themeInputCheck();
  const activitiesInputValue = activitiesInputCheck();
  if ($('select#payment option:selected').val() === 'Credit Card') {
    const creditCardInputValue = inputCheck('input#cc-num', 5);
    if ($('input#cc-num').val().length > 1 && $('input#cc-num').val().length < 16) {
      conditionalValidate('input#cc-num', 5);
    }
    const zipCodeInputValue = inputCheck('input#zip', 6);
    if ($('input#zip').val().length > 1 && $('input#zip').val().length < 5) {
      conditionalValidate('input#zip', 6);
    }
    const cvvInputValue = inputCheck('input#cvv', 7);
    if ($('input#cvv').val().length > 1 && $('input#cvv').val().length < 3) {
      conditionalValidate('input#cvv', 7);
    }
  }

  if ($('select#title option:selected').val() === 'other') {
    if (nameInputValue === true &&
        emailInputValue === true &&
        jobRoleInputValue === true &&
        themeInputValue === true &&
        activitiesInputValue === true &&
        zipCodeInputValue === true &&
        cvvInputValue === true) {
      return true;
    } else {
      return false;
    }
  } else if ($('select#title option:selected').val() === 'other' && $('select#payment option:selected').val() === 'Credit Card') {
    if (nameInputValue === true &&
      emailInputValue === true &&
      jobRoleInputValue === true &&
      themeInputValue === true &&
      activitiesInputValue === true &&
      creditCardInputValue === true &&
      zipCodeInputValue === true &&
      cvvInputValue === true) {
      return true;
    } else {
      return false;
    }
  } else if ($('select#payment option:selected').val() === 'Credit Card') {
    if (nameInputValue === true &&
      emailInputValue === true &&
      themeInputValue === true &&
      activitiesInputValue === true &&
      creditCardInputValue === true &&
      zipCodeInputValue === true &&
      cvvInputValue === true) {
      return true;
    } else {
      return false;
    }
  } else {
    if (nameInputValue === true &&
      emailInputValue === true &&
      themeInputValue === true &&
      activitiesInputValue === true) {
      return true;
    } else {
      return false;
    }
  }
}

// Validate input using regex and reinform the user if the input is incorrectly formatted.
function validateInput(inputType, regex, toolTipsName) {
  const nameInputValue = $(inputType).val();
  const validator = regex;
  if (validator.test(nameInputValue)) {
    if ((inputType) === 'input#other-title') {
      $('#title').removeAttr('class');
    }
    $(toolTipsName).addClass('hidden')
    $(inputType).addClass('verified');
    inputVerified(inputType);
    return true;
  } else {
    showToolTips(toolTipsName);
    if ($(inputType).next().text() === 'OK!') {
      $(inputType).removeClass('verified');
      $(inputType).prev().removeClass('verified__text');
      $(inputType).next().addClass('validation-message');
      $(inputType).next().removeClass('validation-message__verified');
      $(inputType).next().text('Opps! Please follow the tool tips recommendation')
      if ((inputType) === 'input#other-title') {
        $(inputType).prev().prev().addClass('error__text');
        $(inputType).prev().prev().removeClass('verified__text');
      }
    } else if ($(inputType).hasClass('verified')) {
      if ((inputType) === 'input#other-title') {
        $(inputType).prev().prev().addClass('error__text');
        $(inputType).prev().prev().removeClass('verified__text');
      }
      $(inputType).addClass('error');
      $(inputType).removeClass('verified');
      $(inputType).prev().addClass('error__text');
      $(inputType).prev().removeClass('verified__text');
    }
    return false;
  }
}

// Tooltips remover
function showToolTips(className) {
  return $(className).removeClass('hidden');
}

// Verify all inputs by changing validation message texts and colors.
function inputVerified(inputType) {
  if ($(inputType).prev().prop('tagName') === 'SELECT') {
    $(inputType).prev().removeClass('verified__text');
    $(inputType).prev().prev().addClass('verified__text');
  } else {
    $(inputType).addClass('verified');
    $(inputType).prev().addClass('verified__text');
  }

  if ($(inputType).next().hasClass('validation-message')) {
    if ($(inputType).prev().prop('tagName') === 'SELECT') {
      $(inputType).prev().removeClass('verified__text');
      $(inputType).prev().prev().addClass('verified__text');
    }
    $(inputType).next().text('OK!');
    $(inputType).next().removeClass('validation-message');
    $(inputType).next().addClass('validation-message__verified');
  }
}


function conditionalValidate(inputType, i) {
  if ($(inputType).next().prop('tagName') === 'P') {
    $(inputType).next().remove();
  }
  $(inputType).addClass('error');
  $(inputType).prev().addClass('error__text');
  $(`<p class="validation-message">${$validation[i].conMessage}</p>`).insertAfter($(inputType));
}

// Format credit card input
function formatCreditCard(input) {
  const regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
  return input.replace(regex, '$1 - $2 - $3 - $4');
}

// Append tooltips.
function appendToolTips() {
  $(`<span class="tooltips name hidden">Can only contain letters in lower or uppercase<span class="name-context__arrow-down"></span></span>`).appendTo($('form'));
  $(`<span class="tooltips email hidden">Must be a valid email address<span class="email-context__arrow-down"></span></span>`).appendTo($('form'));
  $(`<span class="tooltips job-role hidden">Can only contain letters<span class="job-role-context__arrow-down"></span></span>`).appendTo($('form'));
  $(`<span class="tooltips credit-card hidden">Must be a valid 16-digit card<span class="credit-card-context__arrow-down"></span></span>`).appendTo($('form'));
  $(`<span class="tooltips zip-code hidden">Must be a valid zip code<span class="zip-code-context__arrow-down"></span></span>`).appendTo($('form'));
  $(`<span class="tooltips cvv hidden">Must be a 3-digit<span class="cvv-context__arrow-down"></span></span>`).appendTo($('form'));
}


// When the page loads, the first input field is focused.
// Add 'maxlength' attribute to credit card inputs section.
// Append tooltips to the page
$( document ).ready(function() {
  $('input:visible:first').focus();
  $('input#zip').attr('maxlength', "5")
  $('input#cc-num').attr('maxlength', "16")
  $('input#cvv').attr('maxlength', "3")
  appendToolTips();
});

// Hide other job role input field before the page loads.
$('input#other-title').hide();
$('select#title').on('change', () => {
  if ($('select#title option:selected').val() === 'other') {
    $('input#other-title').show();
  } else {
    $('input#other-title').hide();
  }
});

// Hide first <select #theme> "Theme" option
$('select#design option:first').hide();

/* - Update the “Color” field to read “Please select a T-shirt theme”.
   - Hide the colors in the “Color” drop down menu. */
$('select#color').prepend('<option selected disabled>Please select a T-shirt Theme</option>');
$('select#color option').hide();

// Hide the Color options until the design is selected
$('#colors-js-puns').hide();

// Filter T-shirt's color options by user's theme option input.
$('select#design').on('change', () => {
  if ($('select#design option:selected').val() === 'js puns') {
      if ($('fieldset.shirt p').text() === 'Please choose your design') {
        $('fieldset.shirt p').remove();
        $('fieldset.shirt legend').removeClass('error__text');
      }
    $('select#color option:contains("JS Puns shirt only")').show();
    $('select#color option:contains("I ♥ JS shirt only")').hide();
    $('select#color').val('cornflowerblue');
  } else {
    if ($('fieldset.shirt p').text() === 'Please choose your design') {
      $('fieldset.shirt p').remove();
      $('fieldset.shirt legend').removeClass('error__text');
    }
    $('select#color option:contains("I ♥ JS shirt only")').show();
    $('select#color option:contains("JS Puns shirt only")').hide();
    $('select#color').val('tomato');
  }
  $('#colors-js-puns').show();
});

// Checkbox
// - Add and remove total price upon users' choices.
$('fieldset.activities').on('change', () => {
  $('fieldset.activities p').remove();
  $('fieldset.activities legend').removeClass('error__text');
  if ($('fieldset.activities').children().length < 9) {
    $('fieldset.activities').append(`<p></p>`);
    $('fieldset.activities p').text(`Total: $${$totalCost}`);
  }

  if (($('input[type="checkbox"]:checked').length) === 0) {
    $('fieldset.activities p').remove();
  }
});

// Checkbox
/*  - Check for conflicting checkbox option and disable them.
    - Enable conflicted option when the current option is unticked.  */
$('input[type="checkbox"]').click(function() {
  if ($(this).prop("checked") === true) {
    const $clickedCheckBox = $(this);
    $totalCost += (parseInt(($(this).attr("data-cost")).slice(1)));
    $('fieldset.activities p').text(`Total: $${$totalCost}`);
    $('input[type="checkbox"]').each(function() {
      if ($(this).data('day-and-time') === $clickedCheckBox.data('day-and-time')) {
        $(this).parent().addClass('disabled');
        $(this).attr('disabled', true);
        $clickedCheckBox.removeAttr('disabled');
        $clickedCheckBox.parent().removeClass('disabled');
      }
    });
  } else if ($(this).prop("checked") === false) {
    const $unClickedCheckedBox = $(this);
    $totalCost -= (parseInt(($(this).attr("data-cost")).slice(1)));
    $('fieldset.activities p').text(`Total: $${$totalCost}`);
    $('input[type="checkbox"]').each(function() {
      if ($(this).data('day-and-time') === $unClickedCheckedBox.data('day-and-time')) {
        $(this).attr('disabled', false);
        $(this).parent().removeClass('disabled');
      }
    });
  }
});

// Credit card
/*  - Remove 'select payment method' from options.
    - Show & Hide payment information upon users' choice of payment.  */
$('select#payment option:first').remove();
$('select#payment').val('Credit Card');
$('#paypal').hide();
$('#bitcoin').hide();

$('select#payment').on('change', () => {
  if ($('select#payment option:selected').val() === 'PayPal') {
    $('div#paypal').show()
    $('div#credit-card').hide();
    $('div#bitcoin').hide()
  } else if ($('select#payment option:selected').val() === 'Bitcoin') {
    $('div#bitcoin').show()
    $('div#paypal').hide()
    $('div#credit-card').hide();
  } else if ($('select#payment option:selected').val() === 'Credit Card') {
    $('div#credit-card').show()
    $('div#paypal, div#bitcoin').hide()
  }
});

// All input listeners
// Validate user's input on keypup and check to whether to show tooltips or not.
$('input#name').on('keyup', () => {
  validateInput('input#name', nameValidator, '.tooltips.name');
});

$('input#mail').on('keyup', () => {
  validateInput('input#mail', emailValidator, '.tooltips.email');
});

$('input#other-title').on('keyup', () => {
  validateInput('input#other-title', jobRoleValidator, '.tooltips.job-role');
});

$('input#cc-num').on('keyup', () => {
  validateInput('input#cc-num', creditCardValidator, '.tooltips.credit-card');
});

$('input#cc-num').blur(e => {
  e.target.value = formatCreditCard(e.target.value);
});

$('input#zip').on('keyup', () => {
  validateInput('input#zip', zipCodeValidator, '.tooltips.zip-code');
});

$('input#cvv').on('keyup', () => {
  validateInput('input#cvv', cvvValidator, '.tooltips.cvv');
});

$('button[type="submit"]').on('click', checkForms);
