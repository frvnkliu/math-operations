A Web App used to create 32x32 pngs of math operations.

Uses HTML Canvas to render images, and implement user drawing.

Uses Javascript libraries JSZip and FileSaver in order to export a zip of the photos.
<br>Exports a folder with the following format:
<br>&emsp;  math-operations-images
<br>&emsp;&emsp;      >divide
<br>&emsp;&emsp;&emsp;          divide0_?.png
<br>&emsp;&emsp;&emsp;          divide1_?.png
<br>&emsp;&emsp;&emsp;          divide2_?.png
<br>&emsp;&emsp;&emsp;          ...
<br>&emsp;&emsp;      >minus
<br>&emsp;&emsp;      >multiply
<br>&emsp;&emsp;      >plus
<br>&emsp;&emsp;      >slash
      
? - a randomly generated number between 0-100000000 to avoid naming conflicts
<br>An operation folder (e.g. minus, multiply, plus) is only created if there are images of them
<br><br>
Preview:
<img src="DrawToolPreview.png">
