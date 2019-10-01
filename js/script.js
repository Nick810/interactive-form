/* ----- Variable Declaration ----- */
let $totalCost = 0;
const nameValidator = /^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailValidator = /^[^@]+@[^@.]+\.[a-z]+$/i;
const creditCardValidator = /^\d{16}/;
const zipCodeValidator = /^\d{5}/;
const cvvValidator = /^\d{3}/;
const $validate = [
  {
    message: 'Please enter your name',
    conMessage: 'Please make sure you enter letters only',
  },
  {
    message: 'Please enter your email address',
    conMessage: 'Please enter a valid format of email address',
  },
  {
    message: 'Please enter your job role',
    conMessage: 'Please make sure you enter letters only',
  },
  {
    message: 'Please choose your design',
  },
  {
    message: 'Please choose your activities',
  },
  {
    message: 'Please fill in your 16-digit number',
    conMessage: 'Please make sure you enter 16 digits of numbers',
  },
  {
    message: 'Please fill in your zip code',
    conMessage: 'Please make sure you enter 5 digits of numbers',
  },
  {
    message: 'Please fill in your 3-digit cvv',
    conMessage: 'Please make sure you enter 3 digits of numbers',
  }
];

/* ----- Functions ----- */
// Validate text type inputs
// function inputCheck(inputType, index) {
//   const inputValue = $(inputType).val();
//   if (/\s/.test(inputValue) || /^$/.test(inputValue) && $validation[index].display === false) {
//     $(inputType).addClass('error');
//     $(inputType).prev().addClass('error__text');
//     $(`<p class="validation-message">${$validation[index].message}</p>`).insertAfter($(inputType));
//     $validation[index].display = true;
//     return false;
//   } else if (/\s/.test(inputValue) || /^$/.test(inputValue) && $validation[index].display === true) {
//     return false;
//   } else if (/\s/.test(inputValue) || /^$/.test(inputValue)) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// // Validate theme input.
// function themeInputCheck() {
//   if ($('select#design option:selected').val() === 'Select Theme' && $validation[3].display === false) {
//     $('fieldset.shirt legend').first().addClass('error__text');
//     $(`<p class="validation-message">${$validation[3].message}</p>`).appendTo($('fieldset.shirt'))
//     $validation[3].display = true;
//     return false;
//   } else if ($('select#design option:selected').val() === 'Select Theme' && $validation[3].display === true) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// // Validate activities input.
// function activitiesInputCheck() {
//   if ($('input[type="checkbox"]:checked').length === 0 && $validation[4].display === false) {
//     $('fieldset.activities legend').addClass('error__text');
//     $(`<p class="validation-message">${$validation[4].message}</p>`).appendTo($('fieldset.activities'))
//     $validation[4].display = true;
//     return false;
//   } else if ($('input[type="checkbox"]:checked').length === 0 && $validation[4].display === true) {
//     return false;
//   } else {
//     return true;
//   }
// }

// // Master validation of all inputs prior to user's submission.
// function checkForms() {
//   let jobRoleInputValue = null;
//   const nameInputValue = inputCheck('input#name', 0);
//   if (/^\d+/.test($('input#name').val())) {
//     if ($('input#name').next().prop('tagName') === 'P') {
//       $('input#name').next().remove();
//     }
//     $('input#name').addClass('error');
//     $('input#name').prev().addClass('error__text');
//     $(`<p class="validation-message">${$validation[0].conMessage}</p>`).insertAfter($('input#name'));
//   }
//   const emailInputValue = inputCheck('input#mail', 1);
//   if (!emailValidator.test($('input#mail').val())) {
//     if ($('input#mail').next().prop('tagName') === 'P') {
//       $('input#mail').next().remove();
//     }
//     $('input#mail').addClass('error');
//     $('input#mail').prev().addClass('error__text');
//     $(`<p class="validation-message">${$validation[1].conMessage}</p>`).insertAfter($('input#mail'));
//   }
//   if ($('select#title option:selected').val() === 'other') {
//     jobRoleInputValue = inputCheck('input#other-title', 2);
//     $('select#title').prev().addClass('error__text');
//     $('select#title').removeClass('error__text');
//     if (/^\d+/.test($('input#other-title').val())) {
//       if ($('input#other-title').next().prop('tagName') === 'P') {
//         $('input#other-title').next().remove();
//       }
//       $(`<p class="validation-message">${$validation[0].conMessage}</p>`).insertAfter($('input#other-title'));
//     }
//   }
  // const themeInputValue = themeInputCheck();
//   const activitiesInputValue = activitiesInputCheck();
//   if ($('select#payment option:selected').val() === 'Credit Card') {
//     const creditCardInputValue = inputCheck('input#cc-num', 5);
//     if ($('input#cc-num').val().length > 1 && $('input#cc-num').val().length < 16) {
//       conditionalValidate('input#cc-num', 5);
//     }
//     const zipCodeInputValue = inputCheck('input#zip', 6);
//     if ($('input#zip').val().length > 1 && $('input#zip').val().length < 5) {
//       conditionalValidate('input#zip', 6);
//     }
//     const cvvInputValue = inputCheck('input#cvv', 7);
//     if ($('input#cvv').val().length > 1 && $('input#cvv').val().length < 3) {
//       conditionalValidate('input#cvv', 7);
//     }
//   }
//
//   if ($('select#title option:selected').val() === 'other') {
//     if (nameInputValue === true &&
//         emailInputValue === true &&
//         jobRoleInputValue === true &&
//         themeInputValue === true &&
//         activitiesInputValue === true &&
//         zipCodeInputValue === true &&
//         cvvInputValue === true) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if ($('select#title option:selected').val() === 'other' && $('select#payment option:selected').val() === 'Credit Card') {
//     if (nameInputValue === true &&
//       emailInputValue === true &&
//       jobRoleInputValue === true &&
//       themeInputValue === true &&
//       activitiesInputValue === true &&
//       creditCardInputValue === true &&
//       zipCodeInputValue === true &&
//       cvvInputValue === true) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if ($('select#payment option:selected').val() === 'Credit Card') {
//     if (nameInputValue === true &&
//       emailInputValue === true &&
//       themeInputValue === true &&
//       activitiesInputValue === true &&
//       creditCardInputValue === true &&
//       zipCodeInputValue === true &&
//       cvvInputValue === true) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     if (nameInputValue === true &&
//       emailInputValue === true &&
//       themeInputValue === true &&
//       activitiesInputValue === true) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
//
// // Validate input using regex and reinform the user if the input is incorrectly formatted.
function validateInput(inputType, regex, toolTipsName) {
  const nameInputValue = $(inputType).val();
  const validator = regex;
  if (validator.test(nameInputValue)) {
    if ($(inputType).next().prop('tagName') === 'P') {
      $(inputType).next().remove();
    }
    $(`<p class="validation-message">OK!</p>`).insertAfter(inputType);
    $(toolTipsName).addClass('hidden')
    $(inputType).css('border', '2px solid #6CC070');
    $(inputType).next().css('color', '#6CC070');
    $(inputType).prev().css('color', '#6CC070');
    if ((inputType) === 'input#other-title') {
      $(inputType).prev().css('color', 'black');
      $(inputType).prev().prev().css('color', '#6CC070');
    }
    return true;
  } else {
    if ($(inputType).next().text() === 'OK!') {
      $(inputType).next().text('Oops! Please follow the recommended tooltips.')
    }
    showToolTips(toolTipsName);
    $(inputType).css('border', '2px solid #A63232');
    if ($(inputType).next().prop('tagName') === 'P') {
      $(inputType).next().css('color', '#A63232');
    }
    $(inputType).prev().css('color', '#A63232');
    if ((inputType) === 'input#other-title') {
      $(inputType).prev().css('color', 'black');
      $(inputType).prev().prev().css('color', '#A63232');
    }
    return false;
  }
}
//     if ($(inputType).next().text() === 'OK!') {
//       $(inputType).removeClass('verified');
//       $(inputType).prev().removeClass('verified__text');
//       $(inputType).next().addClass('validation-message');
//       $(inputType).next().removeClass('validation-message__verified');
//       $(inputType).next().text('Opps! Please follow the tool tips recommendation')
//       if ((inputType) === 'input#other-title') {
//         $(inputType).prev().prev().addClass('error__text');
//         $(inputType).prev().prev().removeClass('verified__text');
//       }
//     } else if ($(inputType).hasClass('verified')) {
//       if ((inputType) === 'input#other-title') {
//         $(inputType).prev().prev().addClass('error__text');
//         $(inputType).prev().prev().removeClass('verified__text');
//       }
//       $(inputType).addClass('error');
//       $(inputType).removeClass('verified');
//       $(inputType).prev().addClass('error__text');
//       $(inputType).prev().removeClass('verified__text');
//     }
//     return false;
//   }
// }
//
// // Tooltips remover
function showToolTips(className) {
  return $(className).removeClass('hidden');
}
//
// // Verify all inputs by changing validation message texts and colors.
// function inputVerified(inputType) {
//   if ($(inputType).prev().prop('tagName') === 'SELECT') {
//     $(inputType).prev().removeClass('verified__text');
//     $(inputType).prev().prev().addClass('verified__text');
//   } else {
//     $(inputType).addClass('verified');
//     $(inputType).prev().addClass('verified__text');
//   }
//
//   if ($(inputType).next().hasClass('validation-message')) {
//     if ($(inputType).prev().prop('tagName') === 'SELECT') {
//       $(inputType).prev().removeClass('verified__text');
//       $(inputType).prev().prev().addClass('verified__text');
//     }
//     $(inputType).next().text('OK!');
//     $(inputType).next().removeClass('validation-message');
//     $(inputType).next().addClass('validation-message__verified');
//   }
// }
//
//
// function conditionalValidate(inputType, i) {
//   if ($(inputType).next().prop('tagName') === 'P') {
//     $(inputType).next().remove();
//   }
//   $(inputType).addClass('error');
//   $(inputType).prev().addClass('error__text');
//   $(`<p class="validation-message">${$validation[i].conMessage}</p>`).insertAfter($(inputType));
// }

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
  $('input#zip').attr('maxlength', "5");
  $('input#cc-num').attr('maxlength', "16");
  $('input#cvv').attr('maxlength', "3");
  $(`<p class="validation-message">${$validate[2].message}</p>`).insertAfter($('input#other-title'));
  $(`<p class="validation-message">${$validate[3].message}</p>`).appendTo($('fieldset.shirt'));
  $(`<p class="validation-message">${$validate[4].message}</p>`).appendTo($('fieldset.activities'));
  $(`<p class="validation-message">${$validate[5].message}</p>`).insertAfter($('input#cc-num'));
  $(`<p class="validation-message">${$validate[6].message}</p>`).insertAfter($('input#zip'));
  $(`<p class="validation-message">${$validate[7].message}</p>`).insertAfter($('input#cvv'));
  $('fieldset.shirt p').last().hide();
  $('input#other-title').next().hide();
  $('fieldset.activities p').last().hide();
  $('input#cc-num').next().hide();
  $('input#zip').next().hide();
  $('input#cvv').next().hide();
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
  $('fieldset.shirt legend').css('color', 'black');
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
  // $('fieldset.activities p').remove();
  $('fieldset.activities legend').css('color', 'black');
  if ($('fieldset.activities').children().length < 9) {
    $('fieldset.activities').append(`<p>Total: $${$totalCost}</p>`);
    $('fieldset.activities p').last().css('color', 'black');
    // $('fieldset.activities p').text(`Total: $${$totalCost}`);
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
  validateInput('input#other-title', nameValidator, '.tooltips.job-role');
});

$('input#cc-num').on('keyup', (e) => {
  validateInput('input#cc-num', creditCardValidator, '.tooltips.credit-card');
  if (e.key === 'Backspace') {
    if ($('input#cc-num').val().length === 24) {
      const regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
      let inputValue = $('input#cc-num').val( )
      inputValue.replace('$1$2$3$4');
      console.log(inputValue)
      $('input#cc-num').val(inputValue);
    }
  }
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

function validateEmptyInput(inputValue, inputType, index) {
  if (/\s/.test(inputValue) || /^$/.test(inputValue)) {
    return false;
  } else {
    return true;
  }
}

function validateCondition(regex, inputValue) {
  if (!regex.test(inputValue)) {
    return false;
  } else {
    return true;
  }
}

function validateName() {
  const nameVal = $('input#name').val();
  const validateInput = validateEmptyInput(nameVal);
  const validateInputCon = validateCondition(nameValidator, nameVal)
  if ($('input#name').next().prop('tagName') === 'P') {
    $('input#name').next().remove();
  }
  if (validateInput && validateInputCon) {
    return true;
  } else {
    $(`<p class="validation-message">${$validate[0].message}</p>`).insertAfter($('input#name'));
    $('input#name').css('border', '2px solid #A63232');
    $('input#name').next().css('color', '#A63232');
    $('input#name').prev().css('color', '#A63232');
    return false;
  }
}

function validateEmail() {
  const emailVal = $('#mail').val();
  const validateInput = validateEmptyInput(emailVal);
  const validateInputCon = validateCondition(emailValidator, emailVal)
  if ($('input#mail').next().prop('tagName') === 'P') {
    $('input#mail').next().remove();
  }
  if (validateInput && validateInputCon) {
    return true;
  } else {
    $(`<p class="validation-message">${$validate[1].message}</p>`).insertAfter($('input#mail'));
    $('input#mail').css('border', '2px solid #A63232');
    $('input#mail').next().css('color', '#A63232');
    $('input#mail').prev().css('color', '#A63232');
    return false;
  }
}

function jobRoleInputCheck() {
  const jobRoleVal = $('input#other-title').val();
  const validateInput = validateEmptyInput(jobRoleVal);
  const validateInputCon = validateCondition(nameValidator, jobRoleVal)
  if (validateInput && validateInputCon) {
    return true;
  } else {
    $('input#other-title').next().show();
    $('input#other-title').css('border', '2px solid #A63232');
    $('input#other-title').next().css('color', '#A63232');
    $('input#other-title').prev().prev().css('color', '#A63232');
    false;
  }
}

function themeInputCheck() {
  // $(`<p class="validation-message">${$validate[3].message}</p>`).appendTo($('fieldset.shirt'))

  if ($('select#design option:selected').val() === 'Select Theme') {
    // $(`<p class="validation-message">${$validate[3].message}</p>`).appendTo($('fieldset.shirt'))
    $('fieldset.shirt p').show();
    $('fieldset.shirt legend').first().css('color', '#A63232');
    if ($('fieldset.shirt:last-child').prop('tagName') === 'P') {
      $('fieldset.shirt:last-child').remove();
      $('fieldset.shirt').next().css('color', '#A63232');
    }
    // $(`<p class="validation-message">${$validate[3].message}</p>`).appendTo($('fieldset.shirt'))
    return false;
  } else {
    return true;
  }
}

function activitiesInputCheck() {
  if ($('input[type="checkbox"]:checked').length === 0) {
    $('fieldset.activities legend').css('color', '#A63232');
    $('fieldset.activities p').show();
    return false;
  } else {
    return true;
  }
}

function creditCardInputCheck() {
  let creditCardVal = $('input#cc-num').val();
  const validateInput = validateEmptyInput(creditCardVal);
  const validateInputCon = validateCondition(creditCardValidator, creditCardVal);
  const zipCodeInput = zipCodeInputCheck();
  const cvvInput = cvvInputCheck();
  const regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
  creditCardVal.replace(regex, '$1 - $2 - $3 - $4');
  if (creditCardVal.length === 25 && creditCardVal && zipCodeInput && cvvInput) {
    return true;
  } else {
    $('input#cc-num').next().show();
    $('input#cc-num').css('border', '2px solid #A63232');
    $('input#cc-num').next().css('color', '#A63232');
    $('input#cc-num').prev().prev().css('color', '#A63232');
    return false;
  }
}

function zipCodeInputCheck() {
  const zipCodeVal = $('input#zip').val();
  const validateInput = validateEmptyInput(zipCodeVal);
  const validateInputCon = validateCondition(zipCodeValidator, zipCodeVal);
  if (validateInput && validateInputCon) {
    return true;
  } else {
    $('input#zip').next().show();
    $('input#zip').css('border', '2px solid #A63232');
    $('input#zip').next().css('color', '#A63232');
    $('input#zip').prev().prev().css('color', '#A63232');
    return false;
  }
}

function cvvInputCheck() {
  const cvvVal = $('input#cvv').val();
  const validateInput = validateEmptyInput(cvvVal);
  const validateInputCon = validateCondition(cvvValidator, cvvVal);
  if (validateInput && validateInputCon) {
    return true;
  } else {
    $('input#cvv').next().show();
    $('input#cvv').css('border', '2px solid #A63232');
    $('input#cvv').next().css('color', '#A63232');
    $('input#cvv').prev().prev().css('color', '#A63232');
    return false;
  }
}


function checkForms() {
  const nameInput = validateName();
  const emailInput = validateEmail();
  const themeInput = themeInputCheck();
  const activitiesInput = activitiesInputCheck();

  if ($('select#title option:selected').text() === 'Other') {
    const jobRoleInput = jobRoleInputCheck();
    if (nameInput && emailInput && jobRoleInput && themeInput && activitiesInput) {
      return true;
    } else {
      return false;
    }
  } else if ($('select#payment option:selected').text() === 'Credit Card') {
    const creditCardInput = creditCardInputCheck();
    if (nameInput && emailInput && themeInput && activitiesInput && creditCardInput) {
      return true;
    } else {
      return false;
    }
  } else if (nameInput && emailInput && themeInput && activitiesInput) {
    return true;
  } else {
    return false;
  }
}

$('button[type="submit"]').on('click', e => {
  if (checkForms() === true) {
    console.log('form submitted');
    console.log(`checkForms = ${checkForms()}`)
  } else {
    console.log(`checkForms = ${checkForms()}`)
    console.log('prevented');
    e.preventDefault();
  }
});
