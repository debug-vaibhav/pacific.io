USE [user]
GO
/****** Object:  Table [dbo].[user]    Script Date: 10-07-2021 12:00:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [nvarchar](20) NOT NULL,
	[lastName] [nvarchar](20) NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[roleId] [int] NOT NULL,
	[isDeleted] [bit] NOT NULL,
	[isActivated] [bit] NOT NULL,
	[createdBy] [int] NOT NULL,
	[updatedBy] [int] NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
