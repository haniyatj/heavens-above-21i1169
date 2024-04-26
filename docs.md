## Functions

<dl>
<dt><a href="#getTimestamp">getTimestamp(time)</a> ⇒ <code>number</code></dt>
<dd><p>Converts a time string in the format &quot;HH:MM:SS&quot; to seconds.</p>
</dd>
<dt><a href="#post_options">post_options(target, opt)</a> ⇒ <code>Object</code></dt>
<dd><p>Generates options for making a POST request.</p>
</dd>
<dt><a href="#get_options">get_options(target)</a> ⇒ <code>Object</code></dt>
<dd><p>Generates options for making a GET request.</p>
</dd>
<dt><a href="#image_options">image_options(target)</a> ⇒ <code>Object</code></dt>
<dd><p>Generates options for making a GET request for an image.</p>
</dd>
<dt><a href="#iridium_options">iridium_options(target)</a> ⇒ <code>Object</code></dt>
<dd><p>Generates options for making a GET request for an iridium.</p>
</dd>
</dl>

<a name="getTimestamp"></a>

## getTimestamp(time) ⇒ <code>number</code>
Converts a time string in the format "HH:MM:SS" to seconds.

**Kind**: global function  
**Returns**: <code>number</code> - The time in seconds.  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>string</code> | The time string to convert it. |

<a name="post_options"></a>

## post\_options(target, opt) ⇒ <code>Object</code>
Generates options for making a POST request.

**Kind**: global function  
**Returns**: <code>Object</code> - The POST options.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | The target URL. |
| opt | <code>Object</code> | The request options is given |

<a name="get_options"></a>

## get\_options(target) ⇒ <code>Object</code>
Generates options for making a GET request.

**Kind**: global function  
**Returns**: <code>Object</code> - The GET options.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | The target URL. |

<a name="image_options"></a>

## image\_options(target) ⇒ <code>Object</code>
Generates options for making a GET request for an image.

**Kind**: global function  
**Returns**: <code>Object</code> - The image GET options.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | The target URL of the image. |

<a name="iridium_options"></a>

## iridium\_options(target) ⇒ <code>Object</code>
Generates options for making a GET request for an iridium.

**Kind**: global function  
**Returns**: <code>Object</code> - The iridium GET options.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | The target URL. |

