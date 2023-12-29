<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.</p>
<p>Para ello tienen una cadena de texto <code>movements</code> donde cada caracter representa la dirección del movimiento del reno:</p>
<ul>
<li><code>&gt;</code> = Avanza a la derecha</li>
<li><code>&lt;</code> = Avanza a la izquierda</li>
<li><code>*</code> = Puede avanzar o retroceder</li>
</ul>
<p>Por ejemplo, si el movimiento es <code>&gt;&gt;*&lt;</code>, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.</p>
<p>Los elfos quieren saber cuál es la máxima distancia que recorre el reno al <strong>finalizar todos los movimientos.</strong></p>
<p><strong>En el ejemplo anterior, la máxima distancia que recorre el reno es <code>2</code></strong>. Va a la derecha dos veces <code>+2</code>, luego con el <code>*</code> puede ir a la derecha otra vez para maximizar la distancia <code>+1</code> y luego va a la izquierda <code>-1</code>.</p>
<p>Crea una función <code>maxDistance</code> que reciba la cadena de texto <code>movements</code> y devuelva <strong>la máxima distancia</strong> que puede recorrer el reno <strong>en cualquier dirección</strong>:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> movements <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'&gt;&gt;*&lt;'</span>
<span class="shj-syn-kwd">const</span> result <span class="shj-syn-oper">=</span> <span class="shj-syn-func">maxDistance</span>(movements)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(result) <span class="shj-syn-cmnt">// -&gt; 2
</span>
<span class="shj-syn-kwd">const</span> movements2 <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'&lt;&lt;&lt;&gt;'</span>
<span class="shj-syn-kwd">const</span> result2 <span class="shj-syn-oper">=</span> <span class="shj-syn-func">maxDistance</span>(movements2)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(result2) <span class="shj-syn-cmnt">// -&gt; 2
</span>
<span class="shj-syn-kwd">const</span> movements3 <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'&gt;***&gt;'</span>
<span class="shj-syn-kwd">const</span> result3 <span class="shj-syn-oper">=</span> <span class="shj-syn-func">maxDistance</span>(movements3)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(result3) <span class="shj-syn-cmnt">// -&gt; 5
</span></code></pre>
<p>Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es <strong>el valor absoluto de la distancia recorrida máxima al finalizar los movimientos</strong>.</p></div>