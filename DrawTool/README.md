A Web App used to create 32x32 pngs of math operations.

Uses HTML Canvas to render images, and implement user drawing.

Uses Javascript libraries JSZip and FileSaver in order to export a zip of the photos.
<br>Exports a folder with the following format:
<br>  math-operations-images
<br>      >divide
<br>          divide0_?.png
<br>          divide1_?.png
<br>          divide2_?.png
<br>          ...
<br>      >minus
<br>      >multiply
<br>      >plus
<br>      >slash
      
? - a randomly generated number between 0-100000000 to avoid naming conflicts
An operation folder (e.g. minus, multiply, plus) is only created if there are images of them

