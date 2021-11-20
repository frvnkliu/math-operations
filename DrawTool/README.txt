A Web App used to create 32x32 pngs of math operations.

Uses HTML Canvas to render images, and implement user drawing.

Uses Javascript libraries JSZip and FileSaver in order to export a zip of the photos.
Exports a folder with the following format:
  math-operations-images
      >divide
          divide0_?.png
          divide1_?.png
          divide2_?.png
          ...
      >minus
      >multiply
      >plus
      >slash
      
? - a randomly generated number between 0-100000000
An operation folder (e.g. minus, multiply, plus) is only created if there are images of them

