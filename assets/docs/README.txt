Place your LDF1 PDF here with the filename `ldf1.pdf`.

Path: assets/docs/ldf1.pdf

This file will be embedded on the page LDF1.html using an <iframe> and <object> as a fallback. Example:

<iframe src="assets/docs/ldf1.pdf"></iframe>

If you want a sample PDF added, provide one or let me know and I can attempt to add a small placeholder PDF file.

Notes:
- If the PDF opens as a download instead of displaying in the browser, your web server may be sending a Content-Disposition: attachment header. To allow in-browser viewing, serve the file without that header or set Content-Disposition: inline.
- For quick local testing, run a simple static server from the `e:/WEBSITE` folder. For example (PowerShell):

	python -m http.server 8000

	Then open http://localhost:8000/LDF1.html in your browser.