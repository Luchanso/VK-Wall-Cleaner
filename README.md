##Моментальная очистка стены ВКонтакте

Ниже код, в котором надо заменить число 161236502, на ваш ID. 
Затем надо скопировать этот код, открыть вашу страницу в vk.com, нажать F12, перейти во вкладку "Console" вставить код и нажать Enter

		var yor_vk_id = '161236502' // Ваш ID ВКонтакте

		for (var i = 0; i < 100000; i++)
		{	
			var post = document.getElementById('post_delete' + yor_vk_id + '_' + i.toString());
			if (post != null)
			{
				eval(post.getAttribute("onclick"));
			}
		}

- Работает на Chrome, Яндекс.Браузре, Opera. 
- В Firefox за место, клавиши F12, надо нажать CTRL + SHIFT + K, затем вставить код и нажать Enter
- В Internet Explorer не работает
