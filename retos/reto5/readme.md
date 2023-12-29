<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>Santa 🎅 está probando su nuevo trineo eléctrico, el <em>CyberReindeer</em>, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:</p>
<ul>
<li><code>.</code> = Carretera</li>
<li><code>S</code> = Trineo de Santa</li>
<li><code>*</code> = Barrera abierta</li>
<li><code>|</code> = Barrera cerrada</li>
</ul>
<p>Ejemplo de carretera: <code>S...|....|.....</code></p>
<p>Cada unidad de tiempo, <strong>el trineo avanza una posición a la derecha</strong>. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.</p>
<p><strong>Todas las barreras empiezan cerradas</strong>, pero después de 5 unidades de tiempo, se abren todas <strong>para siempre</strong>.</p>
<p><strong>Crea una función que simule el movimiento del trineo</strong> durante un tiempo dado y <strong>devuelva un array</strong> de cadenas representando el estado de la carretera en cada unidad de tiempo:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> road <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'S..|...|..'</span>
<span class="shj-syn-kwd">const</span> time <span class="shj-syn-oper">=</span> <span class="shj-syn-num">10</span> <span class="shj-syn-cmnt">// unidades de tiempo
</span><span class="shj-syn-kwd">const</span> result <span class="shj-syn-oper">=</span> <span class="shj-syn-func">cyberReindeer</span>(road<span class="shj-syn-oper">,</span> time)

<span class="shj-syn-cmnt">/* -&gt; result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/</span>
</code></pre>
<p>El resultado es un <strong>array donde cada elemento muestra la carretera en cada unidad de tiempo</strong>.</p>
<p>Ten en cuenta que <strong>si el trineo está en la misma posición que una barrera</strong>, entonces toma su lugar en el array.</p>
<p>Los elfos se <strong>inspiraron en este <a href="https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript">reto de Code Wars</a></strong>.</p></div>