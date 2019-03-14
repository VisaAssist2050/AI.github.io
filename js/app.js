function call_attention(input_tag) {
  var jquery_tag = $(input_tag);
  jquery_tag.addClass("is-invalid");
  $("#modal-error-alert").prop('hidden', false);
    // jquery_tag.animate({marginLeft: "5px"}).delay(20).animate({marginLeft: "0px"});
  setTimeout(function() {
    jquery_tag.removeClass("is-invalid");
  }, 1500);
}

function hide(element_id) {
  $(element_id).prop('hidden', true);
}

function show_tab(tab_id) {
  $('#navbarList a[href=\"'+tab_id+'\"]').tab('show');
}

// Mail send function (with mailto)
function send_mail() {
  var recipient_addr = $("#recipient-mail")[0].innerHTML;
  // console.log(recipient_addr);
  var form = $("#contact-modal form .form-control");
  // console.log(form);

  // Set up variables for mailto
  var name = form[0].value.replace(/\s/g, "%20");
  // console.log(name);
  
  var subject = form[1].value.replace(/\s/g, "%20");
  // console.log(subject);
  
  // new line %0D%0A
  // space %20
  var mailbody = form[2].value.replace(/(?:\r\n|\r|\n)/g, "%0D%0A");
  mailbody = mailbody.replace(/\s/g, "%20");
  // console.log(mailbody);

  var correct_to_send = true;
  if (name == "") {
    call_attention(form[0]);
    correct_to_send = false;
  }
  if (subject == "") {
    call_attention(form[1]);
    correct_to_send = false;
  }
  if (mailbody == "") {
    call_attention(form[2]);
    correct_to_send = false;
  }

  if (correct_to_send) {
    var mailto_text = "mailto:"+recipient_addr+"?subject="+subject+"%20("+name+")&body="+mailbody;
    console.log(mailto_text);
    window.location.href = mailto_text;
    $("#modal-success-alert").prop('hidden', false);
  }
}

// Particle configuration for main background
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);