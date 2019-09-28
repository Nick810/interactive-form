/* ----- Variable Declaration ----- */
let $totalCost = 0;
const $validation = [
  {
    message: 'Please enter your name',
    display: false
  },
  {
    message: 'Please enter your email address',
    display: false
  },
  {
    message: 'Please enter your job role',
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
    display: false
  },
  {
    message: 'Please fill in your zip code',
    display: false
  },
  {
    message: 'Please fill in your 3-digit cvv',
    display: false
  }
];

// When the page loads, the first input field is focused.
$( document ).ready(function() {
  $('input:visible:first').focus();
  appendToolTips();
});

// Hide other job role input field before the page loads.
$('input#other-title').hide();
$('select#title').on('change', () => {
  if ($('select#title option:selected').val() === 'other') {
    $('input#other-title').show();
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
    $('select#color option:contains("JS Puns shirt only")').show();
    $('select#color option:contains("I ♥ JS shirt only")').hide();
    $('select#color').val('cornflowerblue');
  } else {
    $('select#color option:contains("I ♥ JS shirt only")').show();
    $('select#color option:contains("JS Puns shirt only")').hide();
    $('select#color').val('tomato');
  }
  $('#colors-js-puns').show();
});

// Checkbox
$('fieldset.activities').on('change', () => {
  if ($('fieldset.activities').children().length < 9) {
    $('fieldset.activities').append(`<p></p>`);
    $('fieldset.activities p').text(`Total: $${$totalCost}`);
  }

  if (($('input[type="checkbox"]:checked').length) === 0) {
    $('fieldset.activities p').remove();
  }
});

// Checkbox
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

// Validation
// $('button[type="submit"]').click(function(e) {
//   $('input').each((i, element) => {
//     if ($(element).attr('id') === 'name' && $validation[i].display === false) {
//       return false;
//       $(element).addClass('error');
//       $(element).prev().addClass('error__text');
      // $(`<p class="validation-message">${$validation[i].message}</p>`).insertAfter($(element));
//       $validation[i].display = true;
//     } else if ($(element).attr('id') === 'name' && $validation[i].display === true) {
//       return false;
//     }
//
//     if ($(element).attr('id') === 'mail' && $validation[i].display === false) {
//       e.preventDefault();
//       $(element).addClass('error');
//       $(element).prev().addClass('error__text');
//       $(`<p class="validation-message">${$validation[i].message}</p>`).insertAfter($(element));
//       $validation[i].display = true;
//     } else if ($(element).attr('id') === 'mail' && $validation[i].display === true) {
//       e.preventDefault();
//     }
//
//     if ($('select#title option:selected').val() === 'other') {
//       if ($(element).attr('id') === 'other-title' && $validation[i].display === false) {
//         e.preventDefault();
//         $(element).addClass('error');
//         $(`<p class="validation-message">${$validation[i].message}</p>`).insertAfter($(element));
//         $validation[i].display = true;
//       } else if ($(element).attr('id') === 'other-title' && $validation[i].display === true) {
//         e.preventDefault();
//       }
//     } else {
//       return true;
//     }
//
//
//     //   if ($(element).attr('id') === 'other-title') {
//     //     if ($('select#title option:selected').val() === 'other') {
//     //       $(element).addClass('error');
//           // $(`<p class="validation-message">${$validation[i].message}</p>`).insertAfter($(element));
//     //       $validation[i].display = true;
//     //       return true;
//     //     }
//     //   } else {
//     //     return true;
//     //   }
//     //   e.preventDefault();
//     //   $(element).prev().addClass('error__text')
//     //   $(element).addClass('error');
//     //   $(`<p class="validation-message">${$validation[i].message}</p>`).insertAfter($(element));
//     //   $validation[i].display = true;
//     // } else {
//     //   e.preventDefault();
//   });
  // if ($('select#design option:selected').val() === 'Select Theme' && $validation[3].display === false) {
//     $('fieldset.shirt legend').first().addClass('error__text');
    // $(`<p class="validation-message">${$validation[3].message}</p>`).appendTo($('fieldset.shirt'))
    // $validation[3].display = true;
//   }
//
  // if ($('input[type="checkbox"]:checked').length === 0) {
//     $('fieldset.activities legend').addClass('error__text')
//   }
//
  // if ($('select#payment option:selected').val() === 'Credit Card') {
//     $('#credit-card input').addClass('error');
//     $('label[for="payment"]').prev().addClass('error__text');
//   }
// });
function inputCheck(inputType, index) {
  const inputValue = $(inputType).val();
  if (/\s/.test(inputValue) || /^$/.test(inputValue) && $validation[index].display === false) {
    $(inputType).addClass('error');
    $(inputType).prev().addClass('error__text');
    $(`<p class="validation-message">${$validation[index].message}</p>`).insertAfter($(inputType));
    $validation[index].display = true;
    return false;
  } else {
    return true;
  }
}

function themeInputCheck() {
  if ($('select#design option:selected').val() === 'Select Theme' && $validation[3].display === false) {
    $('fieldset.shirt legend').first().addClass('error__text');
    $(`<p class="validation-message">${$validation[3].message}</p>`).appendTo($('fieldset.shirt'))
    $validation[3].display = true;
    return false;
  } else {
    return true;
  }
}

function activitiesInputCheck() {
  if ($('input[type="checkbox"]:checked').length === 0) {
    $('fieldset.activities legend').addClass('error__text');
    $(`<p class="validation-message">${$validation[4].message}</p>`).appendTo($('fieldset.activities'))
    return false;
  } else {
    return true;
  }
}

function checkForms() {
  nameInputValue = inputCheck('input#name', 0);
  emailInputValue = inputCheck('input#mail', 1);
  if ($('select#title option:selected').val() === 'other') {
    jobRoleInputValue = inputCheck('input#other-title', 2);
    $('select#title').prev().addClass('error__text');
    $('select#title').removeClass('error__text');
  }
  themeInputValue = themeInputCheck();
  activitiesInputValue = activitiesInputCheck();
  if ($('select#payment option:selected').val() === 'Credit Card') {
    creditCardInputValue = inputCheck('input#cc-num', 5);
    zipCodeInputValue = inputCheck('input#zip', 6);
    cvvInputValue = inputCheck('input#cvv', 7);
  }
  if (nameInputValue === true) {
    return true;
  } else {
    return false;
  }
}

$('input#name').on('keyup', () => {
  const nameInputValue = $('input#name').val();
  const nameValidator = /^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (nameValidator.test(nameInputValue)) {
    $('.tooltips.name').addClass('hidden')
  } else {
    showToolTips('.tooltips.name');
    console.log('HOOOOO');
  }
})

function showToolTips(className) {
  $(className).removeClass('hidden');
}

function appendToolTips() {
  $(`<span class="tooltips name hidden">Can only contain letters a-z in lowercase</span>`).insertAfter($('input#name'))
  $(`<span class="tooltips email hidden">Must be a valid email address</span>`).insertAfter($('input#mail'))
  $(`<span class="tooltips credit-card hidden">Must be a valid 16-digit card</span>`).insertAfter($('input#mail'))
  $(`<span class="tooltips zip-code hidden">Must be a valid zip code</span>`).insertAfter($('input#mail'))
  $(`<span class="tooltips cvv hidden">Must be a 3-digit</span>`).insertAfter($('input#mail'))
}
