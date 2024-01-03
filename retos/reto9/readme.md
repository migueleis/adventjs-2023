<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>Están encendiendo las <strong>luces de Navidad 🎄</strong> en la ciudad y, como cada año, ¡hay que arreglarlas!</p>
<p>Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, <strong>siempre deben estar alternadas</strong>. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.</p>
<p>Nos han pedido que escribamos una función <code>adjustLights</code> que, dado un array de strings con el color de cada luz (representados con los <em>emojis</em> 🔴 para el rojo y 🟢 para el verde), devuelva el <strong>número mínimo</strong> de luces que hay que cambiar para que estén los colores alternos.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-func">adjustLights</span>([<span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span>])
<span class="shj-syn-cmnt">// -&gt; 1 (cambias la cuarta luz a 🔴)
</span>
<span class="shj-syn-func">adjustLights</span>([<span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span>])
<span class="shj-syn-cmnt">// -&gt; 1 (cambia la primera luz a verde)
</span>
<span class="shj-syn-func">adjustLights</span>([<span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span>])
<span class="shj-syn-cmnt">// -&gt; 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)
</span>
<span class="shj-syn-func">adjustLights</span>([<span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🟢'</span>])
<span class="shj-syn-cmnt">// -&gt; 0 (ya están alternadas)
</span>
<span class="shj-syn-func">adjustLights</span>([<span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'🔴'</span>])
<span class="shj-syn-cmnt">// -&gt; 1 (cambias la segunda luz a 🟢)
</span></code></pre></div>