<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.</p>
<p>El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la <code>a</code> a la <code>z</code>. Por ejemplo, <code>'66a11b'</code> significa 66 regalos <code>a</code> y 11 regalos <code>b</code>.</p>
<p>Los elfos tienen un <strong>sistema especial</strong> para organizar los regalos:</p>
<ul>
<li>Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por <code>{x}</code>. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: <code>{a}{a}</code>.</li>
<li>Cada 5 cajas se apilan en un palé, representado por <code>[x]</code>. Por ejemplo, 10 cajas de <code>a</code> se apilan en 2 palés de esta manera: <code>[a][a]</code></li>
<li>Cualquier regalo adicional se coloca en una bolsa, representada por <code>()</code> y se colocan todas dentro. Por ejemplo 4 regalos de <code>b</code> se colocan en una bolsa así <code>(bbbb)</code></li>
</ul>
<p><strong>Los regalos luego se colocan en el siguiente orden</strong>: <em>palés, cajas y bolsas</em>. Y los regalos aparecen en el mismo orden que la cadena de entrada.</p>
<p>Tu tarea es escribir una función <code>organizeGifts</code> que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> result1 <span class="shj-syn-oper">=</span> <span class="shj-syn-func">organizeGifts</span>(<span class="shj-syn-str">`76a11b`</span>)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(result1)
<span class="shj-syn-cmnt">// '[a]{a}{a}(aaaaaa){b}(b)'
</span>
<span class="shj-syn-cmnt">/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
</span></code></pre></div>