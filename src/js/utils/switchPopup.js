const switchPopup = (firstForm, secondForm, popup) => {
  firstForm.setListeners([
    {
      event: 'click',
      element: '.switch-link',
      callback: () => {
        popup.clearContent();
        popup.setContent(secondForm.element, secondForm.clear);
      },
    },
  ]);
};

export default switchPopup;
