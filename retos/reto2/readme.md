<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-lg [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-lg [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-lg [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>En el taller de Santa, los elfos tienen una <strong>lista de regalos</strong> que desean fabricar y un conjunto limitado de materiales.</p>
<p>Los <em>regalos son cadenas de texto</em> y los <em>materiales son caracteres</em>. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una <strong>lista de los regalos que se pueden fabricar</strong>.</p>
<p>Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> gifts <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'tren'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'oso'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'pelota'</span>]
<span class="shj-syn-kwd">const</span> materials <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'tronesa'</span>

<span class="shj-syn-func">manufacture</span>(gifts<span class="shj-syn-oper">,</span> materials) <span class="shj-syn-cmnt">// ["tren", "oso"]
</span><span class="shj-syn-cmnt">// 'tren' SÍ porque sus letras están en 'tronesa'
</span><span class="shj-syn-cmnt">// 'oso' SÍ porque sus letras están en 'tronesa'
</span><span class="shj-syn-cmnt">// 'pelota' NO porque sus letras NO están en 'tronesa'
</span>
<span class="shj-syn-kwd">const</span> gifts <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'juego'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'puzzle'</span>]
<span class="shj-syn-kwd">const</span> materials <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'jlepuz'</span>

<span class="shj-syn-func">manufacture</span>(gifts<span class="shj-syn-oper">,</span> materials) <span class="shj-syn-cmnt">// ["puzzle"]
</span>
<span class="shj-syn-kwd">const</span> gifts <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'libro'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'ps5'</span>]
<span class="shj-syn-kwd">const</span> materials <span class="shj-syn-oper">=</span> <span class="shj-syn-str">'psli'</span>

<span class="shj-syn-func">manufacture</span>(gifts<span class="shj-syn-oper">,</span> materials) <span class="shj-syn-cmnt">// []
</span></code></pre></div>