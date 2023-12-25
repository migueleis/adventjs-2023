<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>En el taller de <em>Santa</em> 🎅, algunos mensajes navideños han sido escritos de manera peculiar: <strong>las letras dentro de los paréntesis deben ser leídas al revés</strong></p>
<p><strong>Santa necesita que estos mensajes estén correctamente formateados.</strong> Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.</p>
<p>Eso sí, ten en cuenta que <strong>pueden existir paréntesis anidados</strong>, por lo que debes invertir los caracteres en el orden correcto.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> a <span class="shj-syn-oper">=</span> <span class="shj-syn-func">decode</span>(<span class="shj-syn-str">'hola (odnum)'</span>)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(a) <span class="shj-syn-cmnt">// hola mundo
</span>
<span class="shj-syn-kwd">const</span> b <span class="shj-syn-oper">=</span> <span class="shj-syn-func">decode</span>(<span class="shj-syn-str">'(olleh) (dlrow)!'</span>)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(b) <span class="shj-syn-cmnt">// hello world!
</span>
<span class="shj-syn-kwd">const</span> c <span class="shj-syn-oper">=</span> <span class="shj-syn-func">decode</span>(<span class="shj-syn-str">'sa(u(cla)atn)s'</span>)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(c) <span class="shj-syn-cmnt">// santaclaus
</span>
<span class="shj-syn-cmnt">// Paso a paso:
</span><span class="shj-syn-cmnt">// 1. Invertimos el anidado -&gt; sa(ualcatn)s
</span><span class="shj-syn-cmnt">// 2. Invertimos el que queda -&gt; santaclaus
</span></code></pre>
<p>Notas:</p>
<ul>
<li>Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.</li>
<li>En el mensaje final no deben quedar paréntesis.</li>
<li>El nivel máximo de anidamiento es 2.</li>
</ul></div>