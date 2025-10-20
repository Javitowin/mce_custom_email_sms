(function () {
  const connection = new Postmonger.Session();
  let channel = 'email';

  document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('channelSelect');
    const saveBtn = document.getElementById('saveButton');

    // Journey Builder -> init
    connection.trigger('ready');

    select.addEventListener('change', () => {
      channel = select.value;
    });

    // when user clicks save in the UI
    saveBtn.addEventListener('click', () => {
      const data = {
        inArguments: [ { channel } ],
        outArguments: [],
        metaData: { isConfigured: true }
      };
      connection.trigger('updateActivity', data);
    });
  });
})();
