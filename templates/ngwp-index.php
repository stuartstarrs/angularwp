<div class="row">
	<ul>
		<li ng-repeat="post in vm.posts.data">
			<a href="#/post/{{ post.id }}/{{ post.slug }}">{{ post.title }}</a>
		</li>
	</ul>

</div>