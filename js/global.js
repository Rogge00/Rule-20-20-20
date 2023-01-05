/*
Author: WebThemez
Author URL: http://webthemez.com
*/
$( function() {
// Add background image
	//$.backstretch('images/road2.jpg');
	var endDate = "December 31, 2017 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: +(new Date) + 1000*60*20 ,
	  render: function(data) {
		$(this.el).html("<div>" + "<p id='lblMins'>" + this.leadingZeros(data.min, 2) + "</p>" + " <span>MINUTES</span></div><div>" + 
									"<p id='lblSecs'>" + this.leadingZeros(data.sec, 2) + "</p>" + " <span>SECONDS</span></div>").stop();
	  },
	  refresh: false,
	  onEnd: function() {
		let timerInterval
		Swal.fire({
		title: 'TIME TO REST!!',
		html: 'Look at something at least 20 meters away!<br>I will close in <b></b> milliseconds.',
		timer: 1000*20,
		timerProgressBar: true,
		didOpen: () => {
			Swal.showLoading()
			const b = Swal.getHtmlContainer().querySelector('b')
			timerInterval = setInterval(() => {
			b.textContent = Swal.getTimerLeft()
			}, 100)
		},
		willClose: () => {
			clearInterval(timerInterval)
		},
		allowOutsideClick: () => {
			const popup = Swal.getPopup()
			popup.classList.remove('swal2-show')
			setTimeout(() => {
			  popup.classList.add('animate__animated', 'animate__headShake')
			})
			setTimeout(() => {
			  popup.classList.remove('animate__animated', 'animate__headShake')
			}, 500)
			return false
		  }
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer')
			}
			$("#timerCont").data('countdown').update(+(new Date) + 2000).start();
			var audio = $("#soundObj")[0];
			audio.pause();
		});
		//sound alert
		var mp3 = '<source src="media/dis.mp3" type="audio/mp3">';
        document.getElementById("sound").innerHTML = '<audio autoplay="autoplay" id="soundObj">' + mp3 + "</audio>";
	  }
	}).on("click", function() {
		$(this).data('countdown').update(+(new Date) + 1000).start();
	  });
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
