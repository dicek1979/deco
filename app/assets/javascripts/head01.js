function print_header(site_category, param_id) {

  document.write("<ul class=\"dropdown-menu\">");

  switch (site_category) {
  case "file_receive":
    document.write("<li class=\"active\" id=\"p_top\"><a href=\"" + script_url + "/file_receive\">ホーム</a></li>" +
                   "<li></li>" +
                   "<li></li>");
    break;
  case "requested_file_send":
    document.write("<li class=\"active\" id=\"p_top\"><a href=\"" + script_url + "/requested_file_send/login/" + param_id + "\">ホーム</a></li>" +
                   "<li></li>" +
                   "<li></li>");
    break;
  case "requested_file_receive":
    document.write("<li class=\"active\" id=\"p_top\"><a href=\"" + script_url + "/requested_file_receive/login/" + param_id + "\">ホーム</a></li>" +
                   "<li></li>" +
                   "<li></li>");
   break;
  case "system":
    break;
  default:
    document.write("<li class=\"active\" id=\"p_top\"><a href=\"" + script_url + "/\">ホーム</a></li>" + 
                   "<li id=\"p_sen\"><a href=\"" + script_url + "/file_send\">ファイル送信</a></li>" +
                   "<li id=\"p_req\"><a href=\"" + script_url + "/file_request\">ファイル依頼</a></li>");
    break;
  }
  
  if (site_category != "system") {
    for (i = 0; i < amtHeaderMenu; i++) {
      document.write("<li id=\"p_srv\"><a href=\"" + script_url + "/content/load/" + (i + 1) + "\">" + headerMenu[i] + "</a></li>");
    }
  }
  document.write("</ul>");

}
