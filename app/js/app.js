import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {

	const initModal = function () {
		MicroModal.init({
			openTrigger: 'data-micromodal-open',
			disableScroll: true,
			disableFocus: true,
			awaitOpenAnimation: true,
			awaitCloseAnimation: true,
		})
	}
	initModal()

})
