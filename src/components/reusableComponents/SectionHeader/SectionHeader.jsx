export default function SectionHeader({subtitle, titleLevel = "h2", title, description}) {
    const Tag = titleLevel
    return (
        <div>
            {subtitle && 
                <p>{subtitle}</p>
            }
            <Tag>{title}</Tag>
            {description && 
                <p>{description}</p>
            }
        </div>
    )
}