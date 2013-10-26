var yor_vk_id = '161236502' // Ваш ID ВКонтакте

for (var i = 0; i < 100000; i++)
{	
	var post = document.getElementById('post_delete' + yor_vk_id + '_' + i.toString());
	if (post != null)
	{
		eval(post.getAttribute("onclick"));
	}
}