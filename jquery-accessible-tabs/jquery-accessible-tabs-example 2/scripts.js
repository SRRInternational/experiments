$(document).ready(function () {
  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
  });

  $("#open-dialog").click(function () {
    $("#dialog").dialog("open");
  });
});
