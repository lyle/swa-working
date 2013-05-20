
guidedModel =// @startlock
{
	Person :
	{
		email :
		{
			events :
			{
				onLoad:function(attributeName)
				{// @endlock
					try{
						currentSession().checkPermission('admin');
					}catch(e){
						this.email = "*****";
					}
				}// @startlock
			}
		},
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + " " + this.lastName;
			}// @startlock
		}
	}
};// @endlock
