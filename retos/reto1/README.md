<div class="text-lg leading-relaxed text-gray-200 [&amp;>blockquote]:italic [&amp;>blockquote]:text-yellow-400 [&amp;>blockquote]:text-base [&amp;>p]:text-lg [&amp;>p>strong]:text-yellow-300 [&amp;>h2]:font-bold [&amp;>ul]:pl-4 [&amp;>ol]:list-decimal [&amp;>ol]:list-inside [&amp;>ol]:text-yellow-300 [&amp;>ol]:text-base [&amp;>ul]:mb-2 [&amp;>ul]:text-yellow-300 [&amp;>ul]:text-base [&amp;>p>small>a:hover]:underline [&amp;>p>small]:block [&amp;>p>small]:pt-4 [&amp;>p>small]:text-gray-400 [&amp;>ul]:list-disc"><p>En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.</p>
<p>Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.</p>
<p>¡Encuentra el primer número de identificación que se ha repetido, <strong>donde la segunda ocurrencia tenga el índice más pequeño</strong>!</p>
<p>En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> giftIds <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">2</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">2</span>]
<span class="shj-syn-kwd">const</span> firstRepeatedId <span class="shj-syn-oper">=</span> <span class="shj-syn-func">findFirstRepeated</span>(giftIds)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(firstRepeatedId) <span class="shj-syn-cmnt">// 3
</span><span class="shj-syn-cmnt">// Aunque el 2 y el 3 se repiten
</span><span class="shj-syn-cmnt">// el 3 aparece primero por segunda vez
</span>
<span class="shj-syn-kwd">const</span> giftIds2 <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">2</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">4</span>]
<span class="shj-syn-kwd">const</span> firstRepeatedId2 <span class="shj-syn-oper">=</span> <span class="shj-syn-func">findFirstRepeated</span>(giftIds2)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(firstRepeatedId2) <span class="shj-syn-cmnt">// -1
</span><span class="shj-syn-cmnt">// Es -1 ya que no se repite ningún número
</span>
<span class="shj-syn-kwd">const</span> giftIds3 <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span>]
<span class="shj-syn-kwd">const</span> firstRepeatedId3 <span class="shj-syn-oper">=</span> <span class="shj-syn-func">findFirstRepeated</span>(giftIds3)
console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(firstRepeatedId3) <span class="shj-syn-cmnt">// 5
</span></code></pre>
<p><strong>¡Ojo!</strong> Los elfos dicen que esto es una prueba técnica de Google.</p></div>