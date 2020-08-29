export default function railsDateConverter (inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/');
  }