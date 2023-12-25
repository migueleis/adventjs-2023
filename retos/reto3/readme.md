<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>En el taller de Santa, <strong>un elfo travieso</strong> ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.</p>
<p>Tienes la secuencia original de pasos en la fabricación <em>original</em> y la secuencia modificada <em>modified</em> que puede incluir un paso extra o faltar un paso.</p>
<p>Tu tarea es <strong>escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación</strong>. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> original <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'abcd'</span>
<span class="shj-syn-kwd">const</span> modified <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'abcde'</span>
<span class="shj-syn-func">findNaughtyStep</span>(original<span class="shj-syn-oper">,</span> modified) <span class="shj-syn-cmnt">// 'e'
</span>
<span class="shj-syn-kwd">const</span> original <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'stepfor'</span>
<span class="shj-syn-kwd">const</span> modified <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'stepor'</span>
<span class="shj-syn-func">findNaughtyStep</span>(original<span class="shj-syn-oper">,</span> modified) <span class="shj-syn-cmnt">// 'f'
</span>
<span class="shj-syn-kwd">const</span> original <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'abcde'</span>
<span class="shj-syn-kwd">const</span> modified <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'abcde'</span>
<span class="shj-syn-func">findNaughtyStep</span>(original<span class="shj-syn-oper">,</span> modified) <span class="shj-syn-cmnt">// ''
</span></code></pre>
<p>A tener en cuenta:</p>
<ul>
<li>Siempre habrá un paso de diferencia o ninguno.</li>
<li>La modificación puede ocurrir en cualquier lugar de la cadena.</li>
<li>La secuencia <em>original</em> puede estar vacía</li>
</ul></div>