
// jQuery modal click listeners

$('a.rsvp').on('click', function(){
	if ($(this).hasClass('yes')) {
		// yes, they're going
		openModal('<strong>We&#39;ve got you locked in for the night of October 30th.</strong><br /><br />The event starts at 6pm. The later you arrive, the more drinks for the rest of us!  :-P','We&#39;ll see you there!');
	} else {
		// no, not going
		openModal('Awww, we wish you could make it, but we understand.  Maybe next time?','We&#39;ll still keep you posted on future events.');
	}
});

$('a.modal_close').on('click', function(){
	closeModal();
});	



// jQuery modal functions

function openModal(text1, text2) {
	$('.blackout').removeClass('removed');
	$('.modalcontainer p').html(text1);
	$('.modalcontainer h3').html(text2);
	$('.modalcontainer').removeClass('removed');
}

function closeModal() {
	$('.blackout').addClass('removed');
	$('.modalcontainer').addClass('removed');
}