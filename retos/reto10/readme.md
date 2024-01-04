<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>¡Vaya idea ha tenido <em>Sam Elfman</em>! Quiere ofrecer un servicio que te crea un <strong>árbol de Navidad 🎄 personalizado</strong> en cuestión de segundos.</p>
<p>Para crearlo nos pasan una <strong>cadena de caracteres para formar el árbol</strong> y un <strong>número que indica la altura del mismo</strong>.</p>
<p>Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos <strong>de forma cíclica</strong> hasta llegar a la altura indicada. Como <strong>mínimo siempre nos pasarán uno</strong>.</p>
<p>Debemos devolver un <strong>string</strong> multilínea con el árbol de Navidad formado con los adornos, la altura indicada <strong>más una última línea con el tronco formado por el carácter <code>|</code></strong> en el centro y, finalmente, un salto de línea <code>\n</code>.</p>
<p>Por ejemplo si recibimos la cadena "123" y el número <code>4</code> como altura, tendríamos que construir este árbol:</p>
<pre><code>   1
  2 3
 1 2 3
1 2 3 1
   |
</code></pre>
<p>Si recibimos la cadena <code>*@o</code> y el número <code>3</code>, el árbol que debemos devolver es:</p>
<pre><code>  *
 @ o
* @ o
  |
</code></pre>
<p>Nota:</p>
<ul>
<li>El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.</li>
<li>Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.</li>
<li>Los adornos tienen un espacio en blanco entre ellos de separación.</li>
<li><strong>Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.</strong></li>
</ul></div>